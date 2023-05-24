import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './Home';
import About from './About';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Inicio</Link>{' '}
        <Link to="/about">Acerca de</Link>
      </nav>

      <Router>
        <Home path="/" />
        <About path="/about" />
      </Router>
    </div>
  );
};

export default App;
