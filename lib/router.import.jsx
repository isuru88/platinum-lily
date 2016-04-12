import App from '/app';
import DisplayBox from '/client/components/main';

Meteor.startup(function() {

  if (Meteor.isClient) {

    const {Router, Route, IndexRoute, browserHistory} = ReactRouter;

    const root = document.createElement('div');
    root.setAttribute('id', 'root');
    document.body.appendChild(root);

    ReactDOM.render((
      <Router history={browserHistory}>
        <Route name="app" path="/" component={App}>
          <IndexRoute components={{
            main: DisplayBox
          }}/>
        </Route>
      </Router>
    ), root);
  }
});
