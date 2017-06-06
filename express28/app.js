var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Players = require('./models').Players
var cors = require('cors')

const corsOptions = {
  origin: 'http://localhost:3000'
}

app.use(cors())
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'WE HERE'})
});

app.post('/add', function(request, response){
  let params = request.body.player
  Players.create(params)
  .then((newPlayer)=>{
    response.status(200)
    response.json({
      message:"Player added!",
      player: newPlayer
    })
  }).catch((error)=>{
    response.status(400)
    response.json({
      error: error
    })
  })
})

app.get('/showRoster/:team', function (request,response){
  var team = request.params["team"];
  Players.findAll({
    where:{
      school: team
    }
  }).then((roster)=>{
    response.status(200)
    response.json({
      players:roster
    })
  }).catch((error)=>{
    response.status(400)
    respnse.json({
      error:error
    })
  })
})

app.listen(4000, function () {
 console.log('Port 4000 Baby!');
});
