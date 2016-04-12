import TwitterFeed from './twitter/feed';
import TwitterNotifications from './twitter-notifications/feed';

export default React.createClass({
  displayName: 'GestureFeed',

  getInitialState() {
    "use strict";
    return {feed: 'twitter'};
  },

  componentDidMount() {
    "use strict";
    var self = this;
    
    gest
      .options
      .subscribeWithCallback(function(gesture) {
        if (self.state.feed === 'twitter') {
          self.setState({feed: 'twitter-notifications'});
        } else {
          self.setState({feed: 'twitter'});
        }
      });

    gest.start();
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
