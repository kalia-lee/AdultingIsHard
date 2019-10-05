// SERVER SIDE STUFF //
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var port = process.env.PORT || 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');

const queries = require('./routes/queries');

app.get('/names', queries.getUsers)
//app.get('/users/:id', db.getUserById)
//app.post('/users', db.createUser)
//app.put('/users/:id', db.updateUser)
//app.delete('/users/:id', db.deleteUser)

/*
app.get('/names', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
})
*/

app.get('/dashboard', queries.dashboard);
app.get('/*', queries.dashboard); //catch all

// Start listenting for requests at given PORT
app.listen(port, function(){
  console.log('All ears on port: ', port);
});
