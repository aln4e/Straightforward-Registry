import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Create from './routes/Create';
import Teams from './routes/Teams';
import Home from './routes/Home';
import playerStore from './stores/store'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      message: ""
    }
  }

  updateMessage(){
    this.setState({
      message: playerStore.getMessage()
    })
  }

  componentWillMount(){
    playerStore.on('message', this.updateMessage.bind(this))
  }

  render() {
    return (
      <div>
        <div className='message'>{this.state.message}</div>
        <Router>
          <div>
            <Route exact path='/create' component={Create} />
            <Route exact path='/teams' component={Teams} />
            <Route exact path='/' component={Home} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
