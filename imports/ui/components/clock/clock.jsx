import React from 'react';
import moment from 'moment';

export default React.createClass({
  displayName: 'Clock',

  render() {
    "use strict";
    var time = moment(this.props.time).format('HH:mm:ss');

    return (
      <div className="clock">{time}</div>
    );
  }
});
