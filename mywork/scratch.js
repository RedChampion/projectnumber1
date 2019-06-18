
var settings = {
    "async": true,
    "crossDomain": true,
    // "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=dog+restaurant&location=bellevue,WA",
    "url": "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term='dog+friendly'+restaurants&latitude=47.589982&longitude=-122.297814",
    "method": "GET",
    "headers": {
        // "accept": "application/json",
        // "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer SDAEnMNqSOPl9_I9468qC_1PDuSvS67-h-HCkR6lPtwoYMA1bqU1yVT5pP1SUh_Cr3j4GucEh32EuhxxdUXZn7vBtrJ7V7zaD3ZgWmFIxsIDR0B3BY9ix3QxmeyLXHYx",
        "cache-control": "no-cache",
        
    }
}
    
$.ajax(settings).then(function (response) {
    
    var bizName = [];
    var bizLong = [];
    var bizLat = [];
    var bizAddressStreet = []
    var bizAddressState = [];
    var bizRating = [];
    var bizPrice = [];
    var bizUrl = [];
    var bizPhone = [];
    var restDiv = [];
    var p = [];
    
    console.log(response);
    
    for (i=0; i<6;i++) { 

    bizName[i] = response.businesses[i].name;
    bizLong[i] = response.businesses[i].coordinates.longitude;
    bizLat[i] = response.businesses[i].coordinates.latitude;
    bizAddressStreet[i] = response.businesses[i].location.display_address[0];
    bizAddressState[i] = response.businesses[i].location.display_address[1];
    bizRating[i] = response.businesses[i].rating;
    bizPrice[i] = response.businesses[i].price;
    bizUrl[i] = response.businesses[i].url;
    bizPhone[i] = response.businesses[i].display_phone;

    restDiv = $(`<div class="card text-center">`); //creats and store div tag also so that pictures show up next to each other
    p = $(`<div class=".card${i}"-title" style="width: 18rem;">`).html('<br><h4><a href="' + bizUrl[i] +'">' + bizName[i] + '</a></h4><br>' + bizAddressStreet[i] + '<br>' + bizAddressState[i] +'<p>' + bizPhone[i] +'</p><p>' + 'Rating:' + bizRating[i] +'</p><p>' + 'Price:' + bizPrice[i] +'</p>');//creats p tag with rating
      
    restDiv.append(p);
           
    $("#restaurant-container").prepend(restDiv);//adds the dogDiv (div class) before the p tag
    }
});
    
//    "<p class = name>"

    // $('.card' + i + '-title').html('<a href="' + bizUrl[i] +'">' + bizName[i] + '</a>');
    // $('.card' + i + '-text').html('<br>' + bizAddressStreet[i] + '<br>' + bizAddressState[i] +'<p>' + bizPhone[i] +'</p><p>' + 'Rating:' + bizRating[i] +'</p><p>' + 'Price:' + bizPrice[i] +'</p>'); 
    