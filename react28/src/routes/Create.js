import React, { Component } from 'react';
import Header from '../components/Header';
import {addPlayer} from '../actions/action';
import playerStore from '../stores/store'

class Create extends Component {
  constructor(props){
    super(props)
    this.state = {
      player: {
        firstName:"",
        lastName:"",
        position:"",
        school:"",
        rating:"",
      },
      message:"",
      error:""
    }
  }

  redirect(){
    this.props.history.push('/teams')
  }

  componentWillMount(){
    playerStore.on('playerCreated', this.redirect.bind(this))
  }

  handleChange(e){
    const target = e.target
    const player = this.state.player
    player[target.name]=target.value
    this.setState({
      player:player
    })
  }

  handleSubmit(e){
    e.preventDefault();
    addPlayer(this.state)
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>First Name: </label>
            <input type="text" name="firstName" value={this.state.player.firstName} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <label>Last Name: </label>
            <input type="text" name="lastName" value={this.state.player.lastName} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <label>School: </label>
            <select name="school" value={this.state.player.school} onChange={this.handleChange.bind(this)}>
              <option></option>
              <option>Boston College</option>
              <option>Clemson</option>
              <option>Duke</option>
              <option>Florida State</option>
              <option>Georgia Tech</option>
              <option>Louisville</option>
              <option>Miami</option>
              <option>North Carolina</option>
              <option>NC State</option>
              <option>Notre Dame</option>
              <option>Pittsburgh</option>
              <option>Syracuse</option>
              <option>Virginia</option>
              <option>Virginia Tech</option>
              <option>Wake Forest</option>
            </select>
          </div>
          <div>
            <label>Position: </label>
            <select name="position" value={this.state.player.position} onChange={this.handleChange.bind(this)}>
              <option></option>
              <option>Point Gawd</option>
              <option>Shooting Guard</option>
              <option>Small Forward</option>
              <option>Power Forward</option>
              <option>Center</option>
            </select>
          </div>
          <div>
            <label>Rating (out of 100): </label>
            <input type="number" name="rating" value={this.state.player.rating} onChange={this.handleChange.bind(this)}/>
          </div>
          <div>
            <input type="submit" value="Submit"/>
          </div>
        </form>
      </div>
    );
  }
}

export default Create;
