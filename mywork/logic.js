var map, infoWindow;

// var testPinName = "Blue Dog Pond";
// var testPinLat = 47.589982;
// var testPinLong = -122.297814;

//   // Your web app's Firebase configuration

//   var firebaseConfig = {
//     apiKey: "AIzaSyC-r39qRFcrGsY8S7hu4gwSOPDcrc02NkQ",
//     authDomain: "classproject1-2l33t4u.firebaseapp.com",
//     databaseURL: "https://classproject1-2l33t4u.firebaseio.com",
//     projectId: "classproject1-2l33t4u",
//     storageBucket: "classproject1-2l33t4u.appspot.com",
//     messagingSenderId: "288062119401",
//     appId: "1:288062119401:web:a05a59981d13ebb5"
//   };

//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   var database = firebase.database();

  
  
  
//   // 2. Button for adding Data
//   $("#submit-btn").on("click", function(event) {
//     event.preventDefault();
    
//     // Grabs user input
//     var q1 = $("#q1input").val().trim();
//     var q2 = $("#q2input").val().trim();
//     var q3 = $("#q3input").val().trim();
//     var q4 = $("#q4input").val().trim();
//     // Creates local "temporary" object for holding data
//     var data = {
//     Q1: q1,
//     Q2: q2,
//     Q3: q3,
//     Q4: q4
//   };
  
//   // Uploads data to the database
//   database.ref().push(data);
  
//   // Logs everything to console
//   console.log(data.Q1);   
//   console.log(data.Q2);
//   console.log(data.Q3);
//   console.log(data.Q4);
  
//   alert("Data successfully added");
  
//   // Clears all of the text-boxes
//   $("#q1input").val("");
//   $("#q2input").val("");
//   $("#q3input").val("");
//   $("#q4input").val("");
// });

// // 3. Create Firebase event for adding data to the database and onto main page
// database.ref().on("child_added", function(childSnapshot) {
//   console.log(childSnapshot.val());
  
//   // Store everything into a variable.
//   var q1 = childSnapshot.val().Q1;
//   var q2 = childSnapshot.val().Q2;
//   var q3 = childSnapshot.val().Q3;
//   var q4 = childSnapshot.val().Q4;
  
//   // Train Info
//     console.log(q1);
//     console.log(q2);
//     console.log(q3);   
//     console.log(q4);



//     var newRow = $("<tr>").append(
//         $("<td>").text(q1),
//         $("<td>").text(q2),
//         $("<td>").text(q3),
//         $("<td>").text(q4),
//         );
        
//         $("#data1").text(q1);
//         // Append the new row to the table
//         $("#data-table > dbody").append(newRow);
// });



var map, infoWindow;
// Test Marker Dog Park : Blue Dog Pond
var testPinName = "Blue Dog Pond";
var testPinLat = 47.589982;
var testPinLong = -122.297814;
function initMap() {
  //creates map on the screen, using random lat/lng.  asks user location and takes them there at zoom 15
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 47.610378, lng: -122.200676 },
    zoom: 12
  });
  infoWindow = new google.maps.InfoWindow;
  //if location is accessed, takes the screen to the users location.
  if (navigator.geolocation) {
    console.log('geolocation exists')
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log("inside success callback")
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
  // Test Map Marker <<TODO>>
  var infowindow = new google.maps.InfoWindow({
    content: "<h4>Kim</h4>"
  });
  var marker = new google.maps.Marker({
    position: { lat: testPinLat, lng: testPinLong },
    map: map,
    title: 'Uluru (Ayers Rock)'
  });
  marker.addListener('click', function () {
    infowindow.open(map, marker);
  });
}
// if location isnt accessed gives error
function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
    'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}