import Clock from './clock';
import Calendar from './calendar';
import Message from './message';
import GestureFeed from './gesture-feed';

export default React.createClass({
  displayName: 'Main',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    return {};
  },

  /*
<Clock/>
*/
  render() {
    "use strict";
    return (
      <div>
        <div className="ui three column grid">
          <div className="five wide column">
            <GestureFeed/>
          </div>
          <div className="seven wide column"></div>
          <div className="four wide column">
            <Clock/>
            <Calendar/>
          </div>
        </div>
        <Message text="YOU'RE AWESOME!"/>
      </div>
    );
  }
});
