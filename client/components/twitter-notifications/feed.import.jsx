import Notification from './notification';

export default React.createClass({
  displayName: 'TwitterFeed',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    return {
      notifications: TweetNotifications.find({}, {
        sort: {
          created_at: -1
        },
        limit: 10
      }).fetch()
    };
  },

  _getNotifications() {
    "use strict";
    var items = [];

    if (this.data.notifications) {
      this
        .data
        .notifications
        .map(function(notification) {
          items.push(<Notification data={notification}/>);
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
            Activity
          </div>
        </h2>
        <div className="ui small feed">
          {this._getNotifications()}
        </div>
      </div>
    );
  }
});
