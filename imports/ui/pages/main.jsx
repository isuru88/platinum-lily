import { Meteor } from 'meteor/meteor';
import React from 'react';

import Clock from '../components/clock/container';
import Calendar from '../components/calendar/container';
import Message from '../components/message';
import GestureFeed from '../components/gesture-feed';
//import GestureFeed from './events/feed';

export default React.createClass({
  displayName: 'Main',

  handleClick() {
    Meteor.logout();
    Meteor.loginWithGoogle({requestPermissions: ['https://www.googleapis.com/auth/calendar.readonly']});
  },

  /*
<Clock/>
<button onClick={this.handleClick}>Login with Google</button>
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
