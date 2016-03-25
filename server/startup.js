Meteor.startup(function () {
  "use strict";

  if (Meteor.isServer) {
    var T = new TwitMaker({
      consumer_key: Meteor.settings.consumer_key,
      consumer_secret: Meteor.settings.consumer_secret,
      access_token: Meteor.settings.access_token,
      access_token_secret: Meteor.settings.access_token_secret,
      timeout_ms: 60 * 1000, // optional HTTP request timeout to apply to all requests.
    });

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
    }));
  }
});
