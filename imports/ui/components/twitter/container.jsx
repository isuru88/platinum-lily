import { Tweets } from '../../../api/twitter/twitter.js';
import { createContainer } from 'meteor/react-meteor-data';
import Feed from './feed.jsx';

export default createContainer(() => {
  return {
    tweets: Tweets.find({}, {
      sort: {
        created_at: -1
      },
      limit: 10
    }).fetch()
  };
}, Feed);
