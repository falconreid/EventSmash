// hide load page

setTimeout(hideLoadPage, 2500);
setTimeout(showLandingPage, 2500);

function hideLoadPage() {
  $("#loadPage").attr("style", "display: none;");
}

function showLandingPage() {
  $("#landingPage").attr("style", "display:block;");
}

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
  // document.write(imgStr); document.close();
  $("#landingPage.lpImage").attr("style", "background-image:" + imgStr + " ;");
  //   console.log("I made it here");
}

// let rando = getRandomImage(random_images_array);
// setTimeout(getRandomImage(random_images_array), 4000);
// setTimeout(console.log("I made it further"), 4000);
setTimeout(function () {
  getRandomImage(array, path);
}, 4000);


///TicketMaster api call
$(document).ready(function () {
  $('.datepicker').datepicker({

  });
});

//Event search
$(document).ready(function () {
  
  $("#submit").click(function () {
    event.preventDefault()
    var city = $("#city").val().trim();
  //var date = $("#date").val().trim();
  var query = "https://app.ticketmaster.com/discovery/v2/events.json?"
    if(city){
      //query = query+"city="+city
      query += "city="+city
    }
    // if(date){
    //   query += "date="+date
    // }
  var queryURL = `https://app.ticketmaster.com/discovery/v2/events.json?city=${city}&apikey=5GJBJjlK7uMAEW104nXp6GJo5G2xv06i`
    //var queryURL = "https://app.ticketmaster.com/discovery/v2/events.json?city=" + city + "&apikey=5GJBJjlK7uMAEW104nXp6GJo5G2xv06i";
    $.ajax({
      url: queryURL,
      meathod: "GET"
    }).then(function (response) {
      $("#searchResults").empty()
      var events = response._embedded.events
      console.log(response);
      for(i=0; i < events.length; i++){
        var event = events[i]
        var card = generateCard(event)
        $("#searchResults").append(card)
      }
      //var details = $("#details");
      //details.append($("#card-content"))
    })
  })
});
//card
function generateCard(event){
return `<div class="card">
<div class="card-image">
  <img src="${event.images[0].url}">
  <span class="card-title">${event.name}</span>
</div>
<div class="card-content" id="details">
  <p>${event.info}</p>
  <button class= "gothere">Save Event!</button>
</div>
</div>`
}
document.addEventListener("click",function(event){
  console.log(event.target)
  if(event.target.classList.contains("gothere")){
    localStorage.setItem("event", JSON.stringify(event));
    var newInput = $('<li>').text.JSON.parse(localStorage.getItem("event"));
    $("#pastSearch").append(newEvent);
  }
})
