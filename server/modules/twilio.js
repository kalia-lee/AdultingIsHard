// const accountSid = 'AC6c7a35527b7161ddad33d68ca8c469e1';
// const authToken = '5323e3eeee49c46f16465e46f0b3cf0b';
// const client = require('twilio')(accountSid, authToken);
//
// client.messages
//     .create({
//         body: messageText,
//         from: '+12055284661',
//         to: user_phone
//     })
//     .then(message => console.log(message.sid));
//
// user_phone = '+15072025616'
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
