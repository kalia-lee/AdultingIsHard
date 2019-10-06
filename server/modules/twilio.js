const twilio = require('../../config');

function sendReminder(username, appointmentName, url){
  const accountSid = twilio.twilioSID;
  const authToken = twilio.twilioAuthToken;
  const client = require('twilio')(accountSid, authToken);
  let messageText = 'Hi, ' + username + ' this is Automate My Life checking in! Just wanted to remind you to schedule your ' + appointmentName " appointment soon. When you've scheduled your appointment, respond back with OIL. Click here to schedule your appointment: " + url

  client.messages
    .create({
       body: messageText,
       from: twilio.twilioPhoneSend,
       to: twilio.twilioMyPhone
     })
    .then(message => console.log(message.sid));
  }

function receiveMessage(){
  const http = require('http');
  const express = require('express');
  const MessagingResponse = require('twilio').twiml.MessagingResponse;

  const app = express();

  var bodyParser = require('body-parser');
  app.use(bodyParser.json()); // support json encoded bodies
  app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

  app.post('/sms', (req, res) => {
    var from = req.body.From;
    var body = req.body.Body;

    if (body === "OIL") {
    const twiml = new MessagingResponse();

    twiml.message('Thanks for making your appointment!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  } else {
    const twiml = new MessagingResponse();

    twiml.message("Sorry, I'm not sure I understand. Please respond again with OIL when you have booked your appointment.");

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
    }


  });
}

  module.exports = {
    sendReminder
}
