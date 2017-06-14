import Dispatcher from '../dispatchers/dispatcher'
import {EventEmitter} from 'events'

class PlayerStore extends EventEmitter{
  constructor(){
    super()
    this.newPlayer = {}
    this.message = ""
    this.roster = []
  }

  getNewPlayer(){
    return this.newPlayer
  }

  getMessage(){
    return this.message
  }

  getRoster(){
    return this.roster
  }

  updateMessage(str){
    this.message = str
    this.emit('message')
  }

  updatePlayer(attributes){
    this.newPlayer = attributes
    this.updateMessage('New player created!')
    this.emit('playerCreated')
  }

  updateTeam(players){
    this.roster = players
    this.updateMessage('Team has been loaded!')
    this.emit('teamLoaded')
  }

  handleActions(action){
    switch(action.type){
      case('CREATE_PLAYER'):{
        this.updatePlayer(action.player)
        break
      }
      case('SHOW_TEAM'):{
        this.updateTeam(action.team)
        break
      }
      default:{}
    }
  }
}

const playerStore = new PlayerStore()
Dispatcher.register(playerStore.handleActions.bind(playerStore))
window.playerStore = playerStore
export default playerStore
