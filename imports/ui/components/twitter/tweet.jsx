import React from 'react';
import moment from 'moment';

export default React.createClass({
  displayName: 'Tweet',

  _getImages() {
    "use strict";

    if (this.props.data && this.props.data.entities && this.props.data.entities.media && this.props.data.entities.media.length > 0) {
      var items = [];

      this
        .props
        .data
        .entities
        .media
        .map(function(m) {
          if (m.media_url) {
            items.push(
              <img src={m.media_url}/>
            );
          }
        });

      return (
        <div className="extra images">
          {items}
        </div>
      );
    }

    return false;
  },

  render() {
    "use strict";

    return (
      <div className="event">
        <div className="label">
          <img src={this.props.data.user.profile_image_url}/>
        </div>
        <div className="content">
          <div className="date">
            <span className="user">{this.props.data.user.name}</span>
            <span className="extra">&nbsp;@{this.props.data.user.screen_name}&nbsp;{moment(this.props.data.created_at).fromNow(true)}</span>
          </div>
          <div>
            {this.props.data.text}
          </div>
          {this._getImages()}
        </div>
      </div>
    );
  }
});
