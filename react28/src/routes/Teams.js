import React, { Component } from 'react';
import Header from '../components/Header';
import {getRoster} from '../actions/action';
import playerStore from '../stores/store';

class Teams extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: []
  //       firstName:"",
  //       lastName:"",
  //       postion:"",
  //       school:"",
  //       rating:""
  //     },
  //     error:""
    }
  }

  redirect(){
    this.props.history.push('/roster')
  }

  componentWillMount(){
    playerStore.on('teamLoaded', this.redirect.bind(this))
  }

  handleClick(e){
    let target = e.target
    let team = target.name
    console.log(team)
    getRoster(team)
  }

  render() {
    return (
      <div>
        <button className='btn btn-primary' name='Boston College' onClick={this.handleClick.bind(this)}>Boston College</button>
        <br />
        <button className='btn btn-primary' name='Clemson' onClick={this.handleClick.bind(this)}>Clemson</button>
        <br />
        <button className='btn btn-primary' name= 'Duke' onClick={this.handleClick.bind(this)}>Duke</button>
        <br />
        <button className='btn btn-primary' name= 'Florida State' onClick={this.handleClick.bind(this)}>Florida State</button>
        <br />
        <button className='btn btn-primary' name= 'Georgia Tech' onClick={this.handleClick.bind(this)}>Georgia Tech</button>
        <br />
        <button className='btn btn-primary' name='Louisville' onClick={this.handleClick.bind(this)}>Louisville</button>
        <br />
        <button className='btn btn-primary' name='Miami' onClick={this.handleClick.bind(this)}>Miami</button>
        <br />
        <button className='btn btn-primary' name= 'North Carolina' onClick={this.handleClick.bind(this)}>North Carolina</button>
        <br />
        <button className='btn btn-primary' name='NC State' onClick={this.handleClick.bind(this)}>NC State</button>
        <br />
        <button className='btn btn-primary' name='Notre Dame' onClick={this.handleClick.bind(this)}>Notre Dame</button>
        <br />
        <button className='btn btn-primary' name='Pittsburgh' onClick={this.handleClick.bind(this)}>Pittsburgh</button>
        <br />
        <button className='btn btn-primary' name='Syracuse' onClick={this.handleClick.bind(this)}>Syracuse</button>
        <br />
        <button className='btn btn-primary' name='Virginia' onClick={this.handleClick.bind(this)}>Virginia</button>
        <br />
        <button className='btn btn-primary' name='Virginia Tech' onClick={this.handleClick.bind(this)}>Virginia Tech</button>
        <br />
        <button className='btn btn-primary' name='Wake Forest' onClick={this.handleClick.bind(this)}>Wake Forest</button>
      </div>
    );
  }
}

export default Teams;
