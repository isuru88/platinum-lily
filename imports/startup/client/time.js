import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Constants } from '../../api/constants.js';

Meteor.startup(() => {
  Session.setDefault(Constants.TIME_VAR, new Date());

  Meteor.setInterval(function tickUpdate() {
    let date = Date();
    Session.set(Constants.TIME_VAR, date);
  }, 1000);
});
