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
