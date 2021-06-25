import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import MovieDBView from './component/MovieDBView';
import MovieDetail from './component/MovieDetail';

function App() {
  return (
    // <Router>
    //   <Switch>
    //     <Route path="/" exact>
    //       <MovieDBView />
    //     </Route>
    //     <Route path="/:id" component={MovieDetail}>
    //     </Route>
    //   </Switch>
    // </Router>
    <MovieDBView />
  );
}

export default App;
