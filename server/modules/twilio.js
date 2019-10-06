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

  function receiveMessage()

  module.exports = {
    sendReminder
}
