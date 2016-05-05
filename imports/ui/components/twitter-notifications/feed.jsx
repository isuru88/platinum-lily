import Notification from './notification';
import React from 'react';

export default React.createClass({
  displayName: 'TwitterFeed',

  _getNotifications() {
    "use strict";
    var items = [];

    if (this.props.notifications) {
      this
        .props
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
