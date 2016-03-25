export default React.createClass({
  displayName: 'Tweet',

  render() {
    "use strict";

    return (
      <div className="event">
        <div className="label">
          <img src={this.props.image}/>
        </div>
        <div className="content">
          <div className="date">
            <span className="user">{this.props.name}</span>
            <span>&nbsp;@{this.props.screenName}&nbsp;{moment(this.props.date)
                .subtract(2, 'minutes')
                .fromNow(true)}</span>
          </div>
          <div className="meta">
            {this.props.text}
          </div>
        </div>
      </div>
    );
  }
});
