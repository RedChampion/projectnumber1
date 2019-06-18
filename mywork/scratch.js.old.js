
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
    
    console.log(response);
    
    for (i=0; i<7;i++) { 
        

        bizName[i] = response.businesses[i].name;
        bizLong[i] = response.businesses[i].coordinates.longitude;
        bizLat[i] = response.businesses[i].coordinates.latitude;
        bizAddressStreet[i] = response.businesses[i].location.display_address[0];
        bizAddressState[i] = response.businesses[i].location.display_address[1];
        bizRating[i] = response.businesses[i].rating;
        bizPrice[i] = response.businesses[i].price;
        bizUrl[i] = response.businesses[i].url;
        bizPhone[i] = response.businesses[i].display_phone;
        
        $('.card' + i + '-title').html('<a href="' + bizUrl[i] +'">' + bizName[i] + '</a>');
        $('.card' + i + '-text').html('<br>' + bizAddressStreet[i] + '<br>' + bizAddressState[i] +'<p>' + bizPhone[i] +'</p><p>' + 'Rating:' + bizRating[i] +'</p><p>' + 'Price:' + bizPrice[i] +'</p>'); 
        
    // var bizName2 = response.businesses[2].name;
    // var bizLong2 = response.businesses[2].coordinates.longitude;
    // var bizLat2 = response.businesses[2].coordinates.latitude;
    // var bizAddressStreet2 = response.businesses[2].location.display_address[0];
    // var bizAddressState2 = response.businesses[2].location.display_address[2];
    // var bizRating2 = response.businesses[2].rating;
    // var bizPrice2 = response.businesses[2].price;
    // var bizUrl2 = response.businesses[2].url;
    // var bizPhone2 = response.businesses[2].display_phone;

    // var bizName3 = response.businesses[3].name;
    // var bizLong3 = response.businesses[3].coordinates.longitude;
    // var bizLat3 = response.businesses[3].coordinates.latitude;
    // var bizAddressStreet3 = response.businesses[3].location.display_address[0];
    // var bizAddressState3 = response.businesses[3].location.display_address[3];
    // var bizRating3 = response.businesses[3].rating;
    // var bizPrice3 = response.businesses[3].price;
    // var bizUrl3 = response.businesses[3].url;
    // var bizPhone3 = response.businesses[3].display_phone;

    // var bizName4 = response.businesses[4].name;
    // var bizLong4 = response.businesses[4].coordinates.longitude;
    // var bizLat4 = response.businesses[4].coordinates.latitude;
    // var bizAddressStreet4 = response.businesses[4].location.display_address[0];
    // var bizAddressState4 = response.businesses[4].location.display_address[4];
    // var bizRating4 = response.businesses[4].rating;
    // var bizPrice4 = response.businesses[4].price;
    // var bizUrl4 = response.businesses[4].url;
    // var bizPhone4 = response.businesses[4].display_phone;

    // var bizName5 = response.businesses[5].name;
    // var bizLong5 = response.businesses[5].coordinates.longitude;
    // var bizLat5 = response.businesses[5].coordinates.latitude;
    // var bizAddressStreet5 = response.businesses[5].location.display_address[0];
    // var bizAddressState5 = response.businesses[5].location.display_address[5];
    // var bizRating5 = response.businesses[5].rating;
    // var bizPrice5 = response.businesses[5].price;
    // var bizUrl5 = response.businesses[5].url;
    // var bizPhone5 = response.businesses[5].display_phone;

    // var bizName6 = response.businesses[6].name;
    // var bizLong6 = response.businesses[6].coordinates.longitude;
    // var bizLat6 = response.businesses[6].coordinates.latitude;
    // var bizAddressStreet6 = response.businesses[6].location.display_address[0];
    // var bizAddressState6 = response.businesses[6].location.display_address[6];
    // var bizRating6 = response.businesses[6].rating;
    // var bizPrice6 = response.businesses[6].price;
    // var bizUrl6 = response.businesses[6].url;
    // var bizPhone6 = response.businesses[6].display_phone;



    
    // $('#bizName'+ i).html("Name: " + response.businesses[i].name);
    // $('#bizLong'+ i).text("Long: " + response.businesses[i].coordinates.longitude);
    // $('#bizLat' + i).text("Lat: " + response.businesses[i].coordinates.latitude);
    
    // $(".card1-title").html('<a href="' + bizUrl1 + '">' + bizName1 + '</a>');
    // $(".card1-text").html('<br>' + bizAddressStreet1 + '<br>' + bizAddressState1 +'<p>' + bizPhone1 +'</p><p>' + 'Rating:' + bizRating1 +'</p><p>' + 'Price:' + bizPrice1 +'</p>');

    // $(".card2-title").html('<a href="' + bizUrl2 + '">' + bizName2 + '</a>');
    // $(".card2-text").html('<br>' + bizAddressStreet2 + '<br>' + bizAddressState2 +'<p>' + bizPhone2 +'</p><p>' + 'Rating:' + bizRating2 +'</p><p>' + 'Price:' + bizPrice2 +'</p>');

    // $(".card3-title").html('<a href="' + bizUrl3 + '">' + bizName3 + '</a>');
    // $(".card3-text").html('<br>' + bizAddressStreet3 + '<br>' + bizAddressState3 +'<p>' + bizPhone3 +'</p><p>' + 'Rating:' + bizRating3 +'</p><p>' + 'Price:' + bizPrice3 +'</p>');

    // $(".card4-title").html('<a href="' + bizUrl4 + '">' + bizName4 + '</a>');
    // $(".card4-text").html('<br>' + bizAddressStreet4 + '<br>' + bizAddressState4 +'<p>' + bizPhone4 +'</p><p>' + 'Rating:' + bizRating4 +'</p><p>' + 'Price:' + bizPrice4 +'</p>');

    // $(".card5-title").html('<a href="' + bizUrl5 + '">' + bizName5 + '</a>');
    // $(".card5-text").html('<br>' + bizAddressStreet5 + '<br>' + bizAddressState5 +'<p>' + bizPhone5 +'</p><p>' + 'Rating:' + bizRating5 +'</p><p>' + 'Price:' + bizPrice5 +'</p>');

    // $(".card6-title").html('<a href="' + bizUrl6 + '">' + bizName6 + '</a>');
    // $(".card6-text").html('<br>' + bizAddressStreet6 + '<br>' + bizAddressState6 +'<p>' + bizPhone6 +'</p><p>' + 'Rating:' + bizRating6 +'</p><p>' + 'Price:' + bizPrice6 +'</p>');


        // var restDiv = $(`<div class="card" style="width: 18rem;">`); //creats and store div tag also so that pictures show up next to each other
        // var p = $("<p class = name>").text(results.businesses[i].name);//creats p tag with rating
        // // var pawMeButton = $(`<button type="button" class="btn btn-primary dog-button" data-toggle="modal" data-target="#more-info-modal"> Paw Me! Paw Me!</button>`)//creates button tag called paw me that opens modal
        



    }
});