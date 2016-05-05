import React from 'react';

export default React.createClass({
  displayName: 'Tweet',

  render() {
    "use strict";
    return (
      <div className="event">
        <div className="label">
          <i className="calendar outline icon"></i>
        </div>
        <div className="content">
          <div className="summary">
            {this.props.data.description}
            <div className="date">{this.props.data.start.date}</div>
          </div>
        </div>
      </div>
    );
  }
});
