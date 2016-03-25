export default React.createClass({
  displayName: 'Clock',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    var result = Session.get(Constants.TIME_VAR);
    return {time: result};
  },

  render() {
    "use strict";
    var time = moment(this.data.time).format('HH:mm:ss');

    return (
      <div className="clock">{time}</div>
    );
  }
});
