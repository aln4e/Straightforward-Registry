import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render(){
    return(
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to the Atlantic Coast Conference</h2>
        </div>
        <p className="App-intro">
          The Atlantic Coast Conference is the premier academic and athletic conference in the United States. Get to know the schools and programs in depth.
        </p>
      </div>
    )
  }
}

export default Header
