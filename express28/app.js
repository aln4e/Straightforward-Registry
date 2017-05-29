var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var User = require('./models').User

app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', function (request, response) {
  response.json({message: 'API Example App'})
});

app.post('/add', function(request, response){
  
  response.json({params: request.body})
})

app.listen(4000, function () {
 console.log('Port 4000 Baby!');
});
