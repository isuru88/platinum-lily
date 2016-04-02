export default React.createClass({
  displayName: 'Tweet',

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
            <span className="extra">&nbsp;@{this.props.data.user.screen_name}&nbsp;{moment(this.props.data.created_at)
                .subtract(2, 'minutes')
                .fromNow(true)}</span>
          </div>
          <div className="meta">
            {this.props.data.text}
          </div>
        </div>
      </div>
    );
  }
});
