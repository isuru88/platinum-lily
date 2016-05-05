import { CalendarEvents } from '../../../api/google/google.js';
import { createContainer } from 'meteor/react-meteor-data';
import Feed from './feed.jsx';

export default createContainer(() => {
  return {
    events: CalendarEvents.find({}).fetch()
  };
}, Feed);
