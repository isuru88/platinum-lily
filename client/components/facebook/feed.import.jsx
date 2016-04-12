import Post from './post';

export default React.createClass({
  displayName: 'TwitterFeed',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    return {
      tweets: Tweets.find({}, {
        sort: {
          created_at: -1
        },
        limit: 10
      }).fetch()
    };
  },

  _getPosts() {
    "use strict";
    var items = [];

    if (this.data.tweets) {
      this
        .data
        .tweets
        .map(function(tweet) {
          items.push(<Post name={tweet.user.name} screenName={tweet.user.screen_name} image={tweet.user.profile_image_url} text={tweet.text} date={tweet.created_at}/>);
        });
    }

    return items;
  },

  render() {
    "use strict";

    return (
      <div>
        <h2 className="ui header">
          <i className="facebook icon"></i>
          <div className="content">
            Facbook Home
          </div>
        </h2>
        <div className="ui small feed">
          {this._getPosts()}
        </div>
      </div>
    );
  }
});
