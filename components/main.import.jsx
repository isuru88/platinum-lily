import Clock from './clock';
import Message from './message';
import TwitterFeed from './twitter/feed';

export default React.createClass({
  displayName: 'Main',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    return {};
  },

  render() {
    "use strict";
    return (
      <div>
        <div className="ui three column grid">
          <div className="four wide column">
            <TwitterFeed/>
          </div>
          <div className="eight wide column"></div>
          <div className="four wide column">
            <Clock/>
          </div>
        </div>
        <Message text="GOOD MORNING!"/>
      </div>
    );
  }
});
