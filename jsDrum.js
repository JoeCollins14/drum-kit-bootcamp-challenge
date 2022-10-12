//onclick added to buttons in html - alternative method
const bassDrum = new Audio();
bassDrum.src = "/assets/bass-drum.wav";

const crash = new Audio();
crash.src = "/assets/crash.wav";

//event listeners
let floorTomButton = document.querySelector("#floor-tom");

floorTomButton.addEventListener("click", () => {
  const floorTom = new Audio();
  floorTom.src = "/assets/floor-tom.wav";
  floorTom.play();
});

let hiHatButton = document.querySelector("#hi-hat");

hiHatButton.addEventListener("click", () => {
  const hiHat = new Audio();
  hiHat.src = "/assets/hi-hat.wav";
  hiHat.play();
});

let snareButton = document.querySelector("#snare");

snareButton.addEventListener("click", () => {
  const snare = new Audio();
  snare.src = "/assets/snare.wav";
  snare.play();
});

let rideButton = document.querySelector("#ride");

rideButton.addEventListener("click", () => {
  const ride = new Audio();
  ride.src = "/assets/ride.wav";
  ride.play();
});

let highTomButton = document.querySelector("#high-tom");

highTomButton.addEventListener("click", () => {
  const highTom = new Audio();
  highTom.src = "/assets/high-tom.wav";
  highTom.play();
});

let mediumTomButton = document.querySelector("#medium-tom");

mediumTomButton.addEventListener("click", () => {
  const medTom = new Audio();
  medTom.src = "/assets/medium-tom.wav";
  medTom.play();
});
