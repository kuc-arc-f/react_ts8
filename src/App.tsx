
import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
//import './App.css';

import Home from './component/Home';
import demo from './component/demo';

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path='/demo' component={demo} />

        </div>
      </Router>
    </div>
  );
}

export default App;