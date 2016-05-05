import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { renderRoutes } from './router.jsx';
import './time.js';

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
});
