Meteor.startup(function () {
  "use strict";

  if (Meteor.isClient) {
    Session.setDefault(Constants.TIME_VAR, new Date());

    Meteor.setInterval(function tickUpdate() {
      let date = Date();
      Session.set(Constants.TIME_VAR, date);
    }, 1000);
  }
});
