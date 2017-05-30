var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var Players = require('./models').Players

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

app.listen(4000, function () {
 console.log('Port 4000 Baby!');
});
