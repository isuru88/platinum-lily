import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Event from './event';

export default React.createClass({
  displayName: 'TwitterFeed',

  _getEvents() {
    "use strict";
    var items = [];

    if (this.props.events) {
      this
        .props
        .events
        .map(function(e) {
          items.push(<Event key={e.id} data={e}/>);
        });
    }

    return items;
  },

  render() {
    "use strict";

    return (
      <div>
        <h2 className="ui header">
          <i className="calendar icon"></i>
          <div className="content">
            Today's Events
          </div>
        </h2>
        <ReactCSSTransitionGroup component="div" className="ui small feed" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this._getEvents()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
