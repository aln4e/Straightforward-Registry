import React, { Component } from 'react';

class PlayerListing extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>{this.props.player.firstName}</li>
          <li>{this.props.player.lastName}</li>
          <li>{this.props.player.position}</li>
          <li>{this.props.player.rating}</li>s
        </ul>
      </div>
  )}
}

export default PlayerListing;
