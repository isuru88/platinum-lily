import { Meteor } from 'meteor/meteor';
import { AccountsServer } from 'meteor/accounts-base';
import { HTTP } from 'meteor/http';
import { CalendarEvents } from '../../api/google/google.js';
import moment from 'moment';

Meteor.startup(() => {
  AccountsServer.loginServiceConfiguration.remove({
    service: "google"
  });
  AccountsServer.loginServiceConfiguration.insert({
    service: "google",
    clientId: Meteor.settings.google_client_id,
    secret: Meteor.settings.google_secret
  });

  AccountsServer.onLogin(function () {
    CalendarEvents.remove({});
    var url = "https://www.googleapis.com/calendar/v3/users/me/calendarList";
    var options = {
      'headers': {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + Meteor.user()
          .services.google.accessToken,
        'X-JavaScript-User-Agent': "Google APIs Explorer"
      }
    };

    var result = HTTP.get(url, options),
      jsonContent = JSON.parse(result.content);

    if (jsonContent.items && jsonContent.items.length > 0) {
      jsonContent.items.map(function (calendar) {
        console.log(calendar);
        let min = moment()
          .hour(0)
          .minute(0)
          .second(0)
          .format(),
          max = moment()
          .hour(48)
          .minute(0)
          .second(0)
          .format(),
          url = 'https://www.googleapis.com/calendar/v3/calendars/' + encodeURIComponent(calendar.id) + '/events?singleEvents=true&timeMax=' + encodeURIComponent(max) + '&timeMin=' + encodeURIComponent(min);
        options = {
          'headers': {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Meteor.user()
              .services.google.accessToken,
            'X-JavaScript-User-Agent': "Google APIs Explorer"
          }
        };

        let result = HTTP.get(url, options),
          jsonContent = JSON.parse(result.content);

        if (jsonContent.items && jsonContent.items.length > 0) {
          jsonContent.items.map(function (item) {
            CalendarEvents.remove({
              id: item.id
            });
            CalendarEvents.insert(item);
          });
        }
      });
    }
  });
});
