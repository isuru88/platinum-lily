import React from 'react';
import {$} from 'meteor/jquery';
import Main from '../pages/main.jsx';

export default React.createClass({
  displayName: 'App',

  getInitialState: function() {
    "use strict";
    return {
      height: $(document).height()
    };
  },

  handleResize: function(e) {
    "use strict";
    this.setState({
      height: $(document).height()
    });
  },

  componentDidMount: function() {
    "use strict";
    window.addEventListener('resize', this.handleResize);
  },

  componentWillUnmount: function() {
    "use strict";
    window.removeEventListener('resize', this.handleResize);
  },

  render() {
    var divStyle = {
      height: this.state.height
    };

    return (
      <div className="main ui" style={divStyle}>
        <Main></Main>
      </div>
    );
  }
});
