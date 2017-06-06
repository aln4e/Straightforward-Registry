import React, { Component } from 'react';
import Header from '../components/Header';
// import {getRoster} from '../actions/action';
// import playerStore from '../stores/store';

class Roster extends Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     players: []
  //       firstName:"",
  //       lastName:"",
  //       postion:"",
  //       school:"",
  //       rating:""
  //     },
  //     error:""
  //   }
  // }

  // redirect(){
  //   this.props.history.push('/roster')
  // }
  //
  // componentWillMount(){
  //   playerStore.on('teamLoaded', this.redirect.bind(this))
  // }
  //
  // handleClick(e){
  //   let target = e.target
  //   let team = target.name
  //   console.log(team)
  //   debugger
  //   getRoster(team)
  // }

  render() {
    return (
      <div>
        Connected!
      </div>
    );
  }
}

export default Roster;
