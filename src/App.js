import React from 'react';
import { Router, Link } from '@reach/router';
import Home from './components/Home';
import About from './components/About';
import './App.css';

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
