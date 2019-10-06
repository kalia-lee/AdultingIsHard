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


const queries = require('./routes/queries')
const twilio = require('./modules/twilio')

app.get('/names', queries.getUsers);
app.get('/getAllEvents', queries.getAllEvents);
app.get('/getHealthEvents', queries.getHealthEvents);
app.get('/getAssetEvents', queries.getAssetEvents);
app.get('/getPersonalEvents', queries.getPersonalEvents);
app.post('/createEvent', queries.createEvent);
app.put('/updateEvent', queries.updateEvent);


app.get('/dashboard', queries.dashboard);
app.get('/assets', queries.assets);
app.get('/*', queries.dashboard); //catch all

app.post('/sms', twilio.receiveMessage);

// Start listenting for requests at given PORT
app.listen(port, function(){
  console.log('All ears on port: ', port);
});
