export default React.createClass({
  displayName: 'Tweet',

  _getContent() {
    "use strict";
    if (this.props.data && this.props.data.text) {
      return (
        <div className="meta">
          {this.props.data.text}
        </div>
      );
    }
  },

  _getMessage() {
    "use strict";
    var eventName = '',
      time = moment(this.props.data.created_at).fromNow();

    switch (this.props.data.event) {
      case 'favorite':
        eventName = ' favorited';
        break;
      case 'unfavorite':
        eventName = ' unfavorited';
        break;
      case 'follow':
        eventName = ' follows you';
        break;
      case 'quoted_tweet':
        eventName = ' quoted your tweet';
        break;
      case 'reply':
        eventName = ' replied to your tweet';
        break;
      case 'mention':
        eventName = ' mentioned you';
        break;
      default:
        eventName = ' did something nasty!';
    }

    var text = eventName
      .concat(' ')
      .concat(time);

    return (
      <span className="extra">{text}</span>
    );
  },

  render() {
    "use strict";
    return (
      <div className="event">
        <div className="label">
          <img src={this.props.data.source.profile_image_url}/>
        </div>
        <div className="content">
          <div className="date">
            <span className="user">{this.props.data.source.name}</span>
            {this._getMessage()}
          </div>
          {this._getContent()}
        </div>
      </div>
    );
  }
});
