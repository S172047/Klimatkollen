import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hem from './components/Hem';
import Koldioxid from './components/Koldioxid';
import Temperatur from './components/Temperatur';
import Glaciar from './components/Glaciar';
import Header from './components/Meny';

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Hem} />
        <Route path="/koldioxid" component={Koldioxid} />
        <Route path="/temperatur" component={Temperatur} />
        <Route path="/glaciar" component={Glaciar} />
      </div>
    </Router>
  );
}

export default App;
