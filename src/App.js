import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MovieDBView from './component/MovieDBView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <MovieDBView />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
