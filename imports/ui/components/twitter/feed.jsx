import Tweet from './tweet';
import React from 'react';

export default React.createClass({
  displayName: 'TwitterFeed',

  _getTweets() {
    "use strict";
    var items = [];

    if (this.props.tweets) {
      this
        .props
        .tweets
        .map(function(tweet) {
          items.push(<Tweet key={tweet.id} data={tweet}/>);
        });
    }

    return items;
  },

  render() {
    "use strict";
    var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

    return (
      <div>
        <h2 className="ui header">
          <i className="twitter icon"></i>
          <div className="content">
            Live Tweets
          </div>
        </h2>
        <ReactCSSTransitionGroup component="div" className="ui small feed" transitionName="example" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {this._getTweets()}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
});
