import TwitterFeed from './twitter/container';
import TwitterNotifications from './twitter-notifications/container';
import React from 'react';

export default React.createClass({
  displayName: 'GestureFeed',

  getInitialState() {
    "use strict";
    return {feed: 'twitter'};
  },

  componentDidMount() {
    "use strict";
    /*var self = this;

    gest
      .options
      .subscribeWithCallback(function(gesture) {
        if (gesture.left) {
          self.setState({feed: 'twitter-notifications'});
        } else if (gesture.right) {
          self.setState({feed: 'twitter'});
        }
      });

    gest.start(); */
  },

  render() {
    "use strict";
    if (this.state.feed === 'twitter') {
      return (<TwitterFeed/>);
    } else {
      return (<TwitterNotifications/>);
    }
  }
});
