import './App.scss';

import MovieDBView from './component/MovieDBView';

function App() {
  if (!localStorage.getItem('preferredLanguage')) {
    localStorage.setItem('preferredLanguage', 'de')
  }

  return (
    <MovieDBView />
  );
}

export default App;
