import { Session } from 'meteor/session';
import { createContainer } from 'meteor/react-meteor-data';
import { Constants } from '../../../api/constants.js';
import Calendar from './calendar.jsx';


export default createContainer(() => {
  var result = Session.get(Constants.TIME_VAR);
  return {time: result};
}, Calendar);
