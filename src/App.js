import './App.scss';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from "react-router-dom";

import MovieDBView from './component/MovieDBView';
// import MovieDetail from './component/MovieDetail';

function App() {
  if (!localStorage.getItem('preferredLanguage')) {
    localStorage.setItem('preferredLanguage', 'de')
  }
  if (!localStorage.getItem('selectedNav')) {
    localStorage.setItem('selectedNav', '0')
  }
  return (
    <MovieDBView />
  );
}

export default App;
