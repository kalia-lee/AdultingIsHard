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

  app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    twiml.message('Thanks for scheduling your appointment!');

    res.writeHead(200, {'Content-Type': 'text/xml'});
    res.end(twiml.toString());
  });

  http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
  });
}

  module.exports = {
    sendReminder
}
