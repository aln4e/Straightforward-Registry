import React, { Component } from 'react';
import Header from '../components/Header';

class Teams extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: {
        firstName:"",
        lastName:"",
        postion:"",
        school:"",
        rating:""
      },
      error:""
    }
  }

  render() {
    return (
      <div>
        <Header />

      </div>
    );
  }
}

export default Teams;
