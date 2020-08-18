$(document).ready(function(){
    $('.datepicker').datepicker({});
    $('input.autocomplete').autocomplete({
        data: {
          "concerts": null,
          "sports": null,
          "music": null,
          "comedy": null
        },
    });
});

// create random background image - derived from: https://www.dyn-web.com/code/random-image-js/

var random_images_array = [
  "/activities-background1.png",
  "/activities-background2.png",
  "/activities-background3.png",
  "/activities-background4.png",
];

function getRandomImage(imgAr, path) {
  path = path || "././images"; // default path here
  var num = Math.floor(Math.random() * imgAr.length);
  var img = imgAr[num];
  var imgStr = 'url("' + path + img + '") ';
  
  $("#landingPage.lpImage").attr("style", "background-image:" + imgStr + " ;");
  
}

setTimeout(function () {
  getRandomImage(array, path);
}, 4000);


//SeatGeek Page

$("#find-event").on("click", function(event){

  event.preventDefault();

  // Here we grab the values from the input fields
  //$("#search-input").prop("required", true);
  var eventlist = $("#search-input").val();
  var eventcity = $("#city-input").val();
  var eventstate =$("#state-input").val();
  var dateselector =$("#dateselector").val();
  var page="1";

  // Here we take Materialize's default dat (MM DD, YYYY) and format it to be YYYY-MM-DD
  // so it can be passed into the queryURL.
  
  function formatdate(datestring){
    var months  = ["jan", "feb" , "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
    var newdate = datestring.replace(",", "").split(" ");
    var year = newdate[2];
    var day = newdate[1];
    var month = ("0" + (months.indexOf(newdate[0].toLowerCase())+1)).slice(-2);
    current = year+"-"+month+"-"+day;
    console.log(current);
    return current}
  
  
  var queryURL = "https://api.seatgeek.com/2/events?venue.city="+ eventcity + "&venue.state="+ eventstate +  "&taxonomies.name=" + eventlist + "&datetime_utc.gt=" + formatdate(dateselector) +   "&per_page=3&page="+ page + "&client_id=MjEyNDUyODZ8MTU5NjkxNDAwNi40OQ";

 console.log(queryURL);


 
  $.ajax({
      url: queryURL,
      method: "GET"
  }).then(function(response){
  

      //Log the resulting object
      console.log(response);

       var eventDetails= $("#event-view");

       let mappedCards = response.events.map(event => {
         var temp =`
              <div class="card">
                <div class="card-image">
                  <img src=${event.performers[0].image}>
                  <span class="card-title">${event.title}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>${event.description}</p>
                  <p>Category: ${event.type}</p>
                  <p>Location: ${event.venue.address}</p>
                  <p align="right">${event.venue.extended_address}</p>
                </div>
                <div class="card-action">
                  <a href=${event.venue.url}>View Details</a>
              </div>
            </div>
          </div>`;

         eventDetails.append(temp);
       });     
    });
  });

   

    //Load More Events Button
    $(".load-more-button").on("click", function(){
      event.preventDefault();

      var eventlist = $("#search-input").val();
      var eventcity = $("#city-input").val();
      var eventstate =$("#state-input").val();
      var dateselector =$("#dateselector").val();
      var page= "2";
    
    
      // Here we take Materialize's default dat (MM DD, YYYY) and format it to be YYYY-MM-DD
      // so it can be passed into the queryURL.
  
      function formatdate(datestring){
        var months  = ["jan", "feb" , "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
        var newdate = datestring.replace(",", "").split(" ");
        var year = newdate[2];
        var day = newdate[1];
        var month = ("0" + (months.indexOf(newdate[0].toLowerCase())+1)).slice(-2);
        current = year+"-"+month+"-"+day;
        return current}
  
  
        var queryURL = "https://api.seatgeek.com/2/events?venue.city="+ eventcity + "&venue.state="+ eventstate +  "&taxonomies.name=" + eventlist + "&datetime_utc.gt=" + formatdate(dateselector) +   "&per_page=3&page="+ page + "&client_id=MjEyNDUyODZ8MTU5NjkxNDAwNi40OQ";
 
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response){

        var eventDetails= $("#event-view");

        let mappedCards = response.events.map(event => {
          var temp =`
              <div class="card">
                <div class="card-image">
                  <img src=${event.performers[0].image}>
                  <span class="card-title">${event.title}</span>
                  <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                </div>
                <div class="card-content">
                  <p>${event.description}</p>
                  <p>Category: ${event.type}</p>
                  <p>Location: ${event.venue.address}</p>
                  <p align="right">${event.venue.extended_address}</p>
                </div>
                <div class="card-action">
                  <a href=${event.venue.url}>View Details</a>
              </div>
            </div>
          </div>`;

         eventDetails.append(temp);
       });     
    });
  });
    // Clear Events
    $("#clear-event").on("click", function(){ 
    $("#event-view").empty();
  });
