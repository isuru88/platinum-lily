import { Meteor } from 'meteor/meteor';
import { UserDetails } from '../../api/user/user.js';
import { Tweets, TweetNotifications } from '../../api/twitter/twitter.js';
import { TwitMaker } from 'meteor/mrt:twit';
import moment from 'moment';

Meteor.startup(() => {
  var T = new TwitMaker({
      consumer_key: Meteor.settings.twitter_consumer_key,
      consumer_secret: Meteor.settings.twitter_consumer_secret,
      access_token: Meteor.settings.twitter_access_token,
      access_token_secret: Meteor.settings.twitter_access_token_secret,
      timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    }),
    me = UserDetails.findOne({
      type: 'twitter'
    });

  T.get('account/verify_credentials', Meteor.bindEnvironment(function (err, data, response) {
    UserDetails.remove({
      type: 'twitter'
    });
    data.type = 'twitter';
    UserDetails.insert(data);
    me = data;
  }));

  T.get('statuses/home_timeline', Meteor.bindEnvironment(function (err, data, response) {
    console.log(data[0]);
    data.map(function (tweet) {
      Tweets.remove({
        id: tweet.id
      });
      tweet.created_at = moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')
        .toDate();
      tweet.text = tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
      Tweets.insert(tweet);
    });
  }));

  var stream = T.stream('user');

  stream.on('tweet', Meteor.bindEnvironment(function (tweet) {
    Tweets.remove({
      id: tweet.id
    });
    tweet.created_at = moment(tweet.created_at, 'dd MMM DD HH:mm:ss ZZ YYYY', 'en')
      .toDate();
    tweet.text = tweet.text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
    Tweets.insert(tweet);

    if (tweet.in_reply_to_user_id && me && tweet.in_reply_to_user_id === me.id) {
      TweetNotifications.insert({
        event: 'reply',
        created_at: tweet.created_at,
        source: {
          profile_image_url: tweet.user.profile_image_url,
          name: tweet.user.name
        },
        text: tweet.text
      });
    }

    if (tweet.text.indexOf(me.screen_name) > -1) {
      TweetNotifications.insert({
        event: 'mention',
        created_at: tweet.created_at,
        source: {
          profile_image_url: tweet.user.profile_image_url,
          name: tweet.user.name
        },
        text: tweet.text
      });
    }
  }));

  stream.on('delete', Meteor.bindEnvironment(function (tweet) {
    Tweets.remove({
      id: tweet.delete.status.id
    });
  }));

  stream.on('user_event', Meteor.bindEnvironment(function (eventMsg) {
    if (eventMsg.source && me && eventMsg.source.id !== me.id) {
      let text = null;
      if (eventMsg.target_object) {
        text = eventMsg.target_object.text;
      }
      TweetNotifications.insert({
        event: eventMsg.event,
        created_at: eventMsg.created_at,
        source: {
          profile_image_url: eventMsg.source.profile_image_url,
          name: eventMsg.source.name
        },
        text: text
      });
    }
  }));
});
