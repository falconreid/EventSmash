// hide load page

setTimeout(function () {
  hideLoadPage();
}, 2500);

setTimeout(function () {
  showLandingPage();
}, 2500);

function hideLoadPage() {
  $("#loadPage").attr("style", "display: none;");
}

function showLandingPage() {
  $("#landingPage").attr("style", "display:block;");
}

//ticketmaster tone

// const play = document.getElementById("play");
// play.addEventListener("click", () => {
//   const ctx = new (window.AudioContext || window.webkitAudioContext)();

//   const osc = ctx.createOscillator();
//   const amp = ctx.createGain();

//   osc.frequency.value = 200;
//   osc.connect(amp.gain);

//   const filter = ctx.createBiquadFilter();

//   filter.frequency.value = 1250;

//   osc.connect(filter);
//   filter.connect(ctx.destination);

  

//   //osc.connect(ctx.destination);
//   osc.start(0);
//   osc.stop(0.5);
//   osc.onended = () => {
//     console.log(ctx.state);
//   };
// });

//SeatGeek tone

// const meet = document.getElementById("meet");
// meet.addEventListener("click", () => {
//   const ctx = new (window.AudioContext || window.webkitAudioContext)();

//   const osc = ctx.createOscillator();
//   const amp = ctx.createGain();

//   osc.frequency.value = 250;
//   osc.connect(amp.gain);

//   const filter = ctx.createBiquadFilter();

//   filter.frequency.value = 1250;

//   osc.connect(filter);
//   filter.connect(ctx.destination);

//   //osc.connect(ctx.destination);
//   osc.start(0);
//   osc.stop(0.5);
//   osc.onended = () => {
//     console.log(ctx.state);
//   };
// });

//calendar tone

const cal = document.getElementById("cal");
cal.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 150;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 2250;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});


//list tone
const listEvents = document.getElementById("listEvents");
listEvents.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 175;
  osc.connect(amp.gain);

  const filter = ctx.createBiquadFilter();

  filter.frequency.value = 1250;

  osc.connect(filter);
  filter.connect(ctx.destination);

  //osc.connect(ctx.destination);
  osc.start(0);
  osc.stop(0.5);
  osc.onended = () => {
    console.log(ctx.state);
  };
});


//displays list
$(document).ready(function () {
  $("img#listView").on("click", function () {
    $(".collection").fadeToggle(1000);
  });
});

//hides about section
$(document).ready(function () {
  $("img#listView").on("click", function () {
    $("#about").toggle();
  });
});

//date picker
      $(document).ready(function(){
  $('img#datepicker').datepicker();
});

//pull user events from local storage array
console.log( JSON.parse(localStorage.getItem("saveEvent")) );
console.log( JSON.parse(localStorage.getItem("seatEvent")) );

//ticketmaster saved event
var getSaveEventList = localStorage.getItem("saveEvent") ?  JSON.parse(localStorage.getItem("saveEvent")) : []  ;
console.log(getSaveEventList)
var string = ""
//loops through saved events in local storage
for (let index = 0; index < getSaveEventList.length; index++) {
 // concatonates html code
  string +=  `
  
  <li class="collection-item avatar">
<i class="material-icons circle">assignment_ind</i>
<h1 class="title">${getSaveEventList[index].name}</h1>
<img src="${getSaveEventList[index].img}">
<p>${getSaveEventList[index].info}"
</p>

<a href="${getSaveEventList[index].url}" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
</li>

  `


}
//ul selector appends string of <li>
$("#savedEvent").html(string)



//seatgeek saved event
var saveEventList = localStorage.getItem("seatEvent") ?  JSON.parse(localStorage.getItem("seatEvent")) : []  ;
console.log(saveEventList)
var string = ""
//loops through saved events in local storage
for (let index = 0; index < saveEventList.length; index++) {
 // concatonates html code
  string +=  `
  
  <li class="collection-item avatar">
<i class="material-icons circle">assignment_ind</i>
<span class="title">${saveEventList[index].title}</span>
<br>
<img src="${saveEventList[index].img}">
<p>${saveEventList[index].description}
</p>
<a href="${saveEventList[index].url}" class="secondary-content"><i class="material-icons">arrow_forward</i></a>
</li>
<br>

  `


}
//ul selector appends string of <li>
$("#seatEvent").html(string)

//append user events to list view using jquery
    




// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.datepicker');
//   var instances = M.Datepicker.init(elems, options);
// });

// Or with jQuery


      



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

  //   $("#landingPage.lpImage").attr("style", "background-image:" + imgStr + " ;");
  //   console.log(test);
  $("#landingPage.lpImage").css({
    "background-image": 'url("' + path + img + '") ',
    "background-position": "center",
    "background-attachment": "fixed",
    "background-size": "cover",
  });
}

setTimeout(function () {
  getRandomImage(random_images_array);
  console.log("timer is now working");
}, 2600);

let timeDiv = $("<div id='time'></div>");
$("#mainContent").prepend(timeDiv);
$("#time").text(moment().format(`dddd,  DD/MM`));
