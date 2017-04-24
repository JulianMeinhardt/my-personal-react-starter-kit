import React from 'react';
import { HashRouter as Router,
  Route } from 'react-router-dom';
import HelloWorld from './components/helloWorld';
import HelloCurrentWorld from './components/helloCurrentWorld';

const App = () => (
  <Router>
    <div>
      Das ist ein Test:
      <Route exact path="/" component={HelloWorld} />
      <Route exact path="/current" component={HelloCurrentWorld} />
    </div>
  </Router>
);

export default App;
