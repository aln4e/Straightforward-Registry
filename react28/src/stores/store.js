import Dispatcher from '../dispatchers/dispatcher'
import {EventEmitter} from 'events'

class PlayerStore extends EventEmitter{
  constructor(){
    super()
    this.newPlayer = {}
    this.message = ""
  }

  getNewPlayer(){
    return this.newPlayer
  }

  getMessage(){
    return this.message
  }

  updateMessage(str){
    this.message = str
    this.emit('message')
  }

  updatePlayer(attributes){
    this.newPlayer = attributes
    this.updateMessage('New player created!')
    // this.emit('playerCreated')
  }

  handleActions(action){
    switch(action.type){
      case('CREATE_PLAYER'):{
        this.updatePlayer(action.player)
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
