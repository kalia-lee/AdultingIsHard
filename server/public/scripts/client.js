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

/*
request.onreadystatechange = function() {
  if(request.readyState === 4) {
    allNames.style.border = '1px solid #e8e8e8';
    if(request.status === 200) {
      allNames.innerHTML = request.responseText;
    } else {
      allNames.innerHTML = 'An error occurred during your request: ' +  request.status + ' ' + request.statusText;
    }
  }
};

request.open('Get', '/names');

btn.addEventListener('click', function() {
  this.style.display = 'none';
  request.send();
});

*/
// Set up our HTTP request
//var xhr = new XMLHttpRequest();

// Setup our listener to process completed requests
//xhr.onload = function () {

	// Process our return data
	//if (xhr.status >= 200 && xhr.status < 300) {
		// This will run when the request is successful
	//	console.log('success!', xhr);
	//} else {
		// This will run when it's not
	//	console.log('The request failed!');
	//}

	// This will run either way
	// All three of these are optional, depending on what you're trying to do
//	console.log('This always runs...');
//};

// Create and send a GET request
// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
// The second argument is the endpoint URL
//xhr.open('GET', '/tasks');
//xhr.send();
