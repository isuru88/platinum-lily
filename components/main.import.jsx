import Clock from './clock';
import Message from './message';
import GestureFeed from './gesture-feed';

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
            <GestureFeed/>
          </div>
          <div className="eight wide column"></div>
          <div className="four wide column">
            <Clock/>
          </div>
        </div>
        <Message text="YOU'RE AWESOME!"/>
      </div>
    );
  }
});
