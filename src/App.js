import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import Home from './containers/Home';
import routes from './constants/routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact={true} path={routes.home} component={Home} />
      </Switch>
    </div>
  );
}

export default App;
