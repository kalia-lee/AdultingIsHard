const twilio = require('../../config');

function sendReminder(){
  const accountSid = twilio.twilioSID;
  const authToken = twilio.twilioAuthToken;
  const client = require('twilio')(accountSid, authToken);
  let username = "Grace"


  client.messages
    .create({
       body: "Hi " + username + "! Adulting is Hard here. Just wanted to remind you to schedule your oil change appointment soon. When you've scheduled your appointment, respond back with OIL. Here are a few oil change vendors within a 3 mile radius of your residence:\n\nElectra Tune Tire & Auto: electratune.com\nPrecision Tune Auto Care: precisiontune.com\nCar-X Tire & Auto: carx.com",
       from: twilio.twilioPhoneSend,
       to: twilio.twilioMyPhone
     })
    .then(message => console.log(message.sid));
  }

function receiveMessage(req, res){
  var from = req.body.From;
  var body = req.body.Body;
  const MessagingResponse = require('twilio').twiml.MessagingResponse;

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
}

  module.exports = {
    sendReminder,
    receiveMessage
}
