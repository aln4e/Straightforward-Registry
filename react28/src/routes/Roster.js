import React, { Component } from 'react';
import Header from '../components/Header';
import PlayerListing from '../components/Player'
// import {getRoster} from '../actions/action';
import playerStore from '../stores/store';

class Roster extends Component {
  constructor(props){
    super(props)
    this.state = {
      players: playerStore.getRoster()
  //       firstName:"",
  //       lastName:"",
  //       postion:"",
  //       school:"",
  //       rating:""
  //     },
  //     error:""
    }
  }

  updateRoster(){
    this.setState({
      players: playerStore.getRoster()
    })
  }

  componentWillMount(){
    playerStore.on('teamLoaded', this.updateRoster.bind(this))
  }

  renderPlayers(){
    let arr = []
    for(var i = 0;i<this.state.players.length;i++){
      let playerId = "player-" + i
      arr.push(
        <PlayerListing key={playerId} player={this.state.players[i]} />
      )
    }
    return arr
  }

  render() {
    return (
      <div>
        {this.renderPlayers}
      </div>
    );
  }
}

export default Roster;
