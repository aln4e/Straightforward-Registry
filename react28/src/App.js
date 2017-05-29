import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Create from './routes/Create';
import Teams from './routes/Teams';
import Home from './routes/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/create' component={Create} />
          <Route exact path='/teams' component={Teams} />
          <Route exact path='/' component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
