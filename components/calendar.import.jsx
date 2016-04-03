export default React.createClass({
  displayName: 'Clock',
  mixins: [ReactMeteorData],

  getMeteorData() {
    "use strict";
    var result = Session.get(Constants.TIME_VAR);
    return {time: result};
  },

  _getColumns(firstDate, today) {
    "use strict";

    var items = [],
      current = firstDate,
      lastDate = moment(firstDate);

    lastDate.day(7);

    while (lastDate.diff(current) > 0) {
      if (current.date() === today.date()) {
        items.push(
          <td className="active">{current.date()}</td>
        );
      } else if (current.month() !== today.month()) {
        items.push(
          <td className="disabled">{current.date()}</td>
        );
      } else {
        items.push(
          <td>{current.date()}</td>
        );
      }
      current.add(1, 'd');
    }

    return items;
  },

  _getRows() {
    "use strict";
    var items = [],
      today = moment(this.data.time),
      current = moment(this.data.time)
        .date(0)
        .day(0),
      last = moment(this.data.time)
        .add(1, 'M')
        .date(0)
        .day(7);

    while (last.diff(current) > 0) {
      items.push(
        <tr>
          {this._getColumns(current, today)}
        </tr>
      );
    }

    return items;
  },

  render() {
    "use strict";
    var month = moment(this.data.time).format('MMMM');

    return (
      <table className="ui inverted celled center aligned compact large table">
        <thead>
          <tr>
            <th colSpan="7">{month}</th>
          </tr>
          <tr>
            <th>S</th>
            <th>M</th>
            <th>T</th>
            <th>W</th>
            <th>T</th>
            <th>F</th>
            <th>S</th>
          </tr>
        </thead>
        <tbody>
          {this._getRows()}
        </tbody>
      </table>
    );
  }
});
