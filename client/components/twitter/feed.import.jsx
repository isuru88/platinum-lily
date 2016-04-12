import Tweet from './tweet';

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

  _getTweets() {
    "use strict";
    var items = [];

    if (this.data.tweets) {
      this
        .data
        .tweets
        .map(function(tweet) {
          items.push(<Tweet data={tweet} />);
        });
    }

    return items;
  },

  render() {
    "use strict";

    return (
      <div>
        <h2 className="ui header">
          <i className="twitter icon"></i>
          <div className="content">
            Live Tweets
          </div>
        </h2>
        <div className="ui small feed">
          {this._getTweets()}
        </div>
      </div>
    );
  }
});
