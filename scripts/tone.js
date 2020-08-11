// const sampler = new Tone.sampler();
// sampler.oscillator.type = "sine";
// sampler.toMaster();

// const piano = document.getElementById("piano");

// piano.addEventListener("mousedown", e => {
//   sampler.triggerAttack(e.target.dataset.note);
// });

// piano.addEventListener("mouseup", e => {
//   sampler.triggerRelease();
// });

// document.addEventListener("keydown", e => {
//   switch (e.key) {
//     case "q":
//       return sampler.triggerAttack("G#3");
//     case "a":
//       return sampler.triggerAttack("A4");
//     case "w":
//       return sampler.triggerAttack("A#4");
//     case "s":
//       return sampler.triggerAttack("B4");
//     case "d":
//       return sampler.triggerAttack("C4");
//     case "r":
//       return sampler.triggerAttack("C#4");
//     case "f":
//       return sampler.triggerAttack("D4");
//     case "t":
//       return sampler.triggerAttack("D#4");
//     case "g":
//       return sampler.triggerAttack("E4");
//     case "h":
//       return sampler.triggerAttack("F4");
//     case "u":
//       return sampler.triggerAttack("F#4");
//     case "j":
//       return sampler.triggerAttack("G4");
//     case "i":
//       return sampler.triggerAttack("G#4");
//     case "k":
//       return sampler.triggerAttack("A4");
//     case "o":
//       return sampler.triggerAttack("A#4");
//     case "l":
//       return sampler.triggerAttack("B4");
//     default:
//       return;
//   }
// });

// document.addEventListener("keyup", e => {
//   switch (e.key) {
//     case "q":
//     case "a":
//     case "w":
//     case "s":
//     case "d":
//     case "r":
//     case "f":
//     case "t":
//     case "g":
//     case "h":
//     case "u":
//     case "j":
//     case "i":
//     case "k":
//     case "o":
//     case "l":
//        sampler.triggerRelease(); 
//   }
// });

const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

Tone.loaded().then(() => {
	sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"],);
})
document.addEventListener("keydown", e => {
  switch (e.key) {
    case "q":
      return sampler.triggerAttack("G#3");
    case "a":
      return sampler.triggerAttack("A3",);
    case "w":
      return sampler.triggerAttack("A#3");
    case "s":
      return sampler.triggerAttack("B3");
    case "d":
      return sampler.triggerAttack("C4");
    case "r":
      return sampler.triggerAttack("C#4");
    case "f":
      return sampler.triggerAttack("D4");
    case "t":
      return sampler.triggerAttack("D#4");
    case "g":
      return sampler.triggerAttack("E4");
    case "h":
      return sampler.triggerAttack("F4");
    case "u":
      return sampler.triggerAttack("F#4");
    case "j":
      return sampler.triggerAttack("G4");
    case "i":
      return sampler.triggerAttack("G#4");
    case "k":
      return sampler.triggerAttack("A4");
    case "o":
      return sampler.triggerAttack("A#4");
    case "l":
      return sampler.triggerAttack("B4");
    default:
      return;
  }
});

document.addEventListener("keyup", e => {
  switch (e.key) {
    case "q":
    case "a":
    case "w":
    case "s":
    case "d":
    case "r":
    case "f":
    case "t":
    case "g":
    case "h":
    case "u":
    case "j":
    case "i":
    case "k":
    case "o":
    case "l":
       sampler.triggerRelease(); 
  }
});