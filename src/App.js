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
    <MovieDBView />
  );
}

export default App;
