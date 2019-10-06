console.log('client.js connected');

const twilio = require('../../modules/twilio');

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


function triggerTwilio() {
  twilio.sendReminder("Grace", "oil change", "URL_GOES_HERE")
}
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
