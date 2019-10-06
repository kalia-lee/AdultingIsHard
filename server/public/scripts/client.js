console.log('client.js connected');

var btn = document.getElementById('getNames');
var allNames = document.getElementById('allNames');
var url = "http://localhost:5000/names";

var request = new XMLHttpRequest();

async function getNamesFromDB(){
  console.log('Button clicked');

  var response = await fetch(url);
  var text = await response.json();
  console.log('response: ', text);
};

async function triggerTwilioServerSide(){
  console.log('Gonna go twilio');
  var twilioUrl = "http://localhost:5000/goGoTwilio";

  var response = await fetch(twilioUrl, { method: 'POST'});
  var text = await response;
  console.log('twilio response: ', text);
};

/*
function triggerTwilio() {
  let username = "Grace"
  let appointmentName = "oil change"
  let url = "URL_GOES_HERE"
    const accountSid = config.twilioSID;
    const authToken = config.twilioAuthToken;
    const client = require('twilio')(accountSid, authToken);
    let messageText = "Hi, " + username + " this is Automate My Life checking in! Just wanted to remind you to schedule your " + appointmentName + " appointment soon. When you've scheduled your appointment, respond back with OIL. Click here to schedule your appointment: " + url

    client.messages
      .create({
         body: "messageText",
         from: config.twilioPhoneSend,
         to: config.twilioMyPhone
       })
      .then(message => console.log(message.sid));
}*/
// async function checkDueDate() {
//   let today = new Date();
//   var response = await fetch('http://localhost:5000/events'); //Pull events from Database
//   var events = await response.json();
//
//   events.forEach(function(date){
//     if(today.getTime() == date.getTime()) {
//       twilio.sendReminder("Grace", "oil change", "URL_GOES_HERE")
//     }
//   })
// }

async function addEvent() {
  //TODO
  var newEvent = {

  }
  // Post to DB
  var response = await fetch('http://localhost:5000/add/events'); //Pull events from Database


}

async function updateEvent() {
  //TODO
}
