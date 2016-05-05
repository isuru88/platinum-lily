import React from 'react';

export default React.createClass({
  displayName: 'Message',
  render() {
    "use strict";

    return (
      <div className="message">{this.props.text}</div>
    );
  }
});
