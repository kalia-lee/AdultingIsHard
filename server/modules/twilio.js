const twilio = require('../../config');

const accountSid = twilio.twilioSID;
const authToken = twilio.twilioAuthToken;
const client = require('twilio')(accountSid, authToken);



let messageText = 'Hi, this is Adulting_Is_Hard calling! Just wanted to remind you to schedule your appointment soon. Click here to schedule your appointment:'

client.messages
  .create({
     body: messageText,
     from: twilio.twilioPhoneSend,
     to: twilio.twilioMyPhone
   })
  .then(message => console.log(message.sid));

// module.exports = {
// }
