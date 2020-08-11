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

//event brite tone

const play = document.getElementById("play");
play.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 200;
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

//meetup tone

const meet = document.getElementById("meet");
meet.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 250;
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

//calendar tone

const cal = document.getElementById("cal");
cal.addEventListener("click", () => {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();

  const osc = ctx.createOscillator();
  const amp = ctx.createGain();

  osc.frequency.value = 300;
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

  osc.frequency.value = 350;
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
