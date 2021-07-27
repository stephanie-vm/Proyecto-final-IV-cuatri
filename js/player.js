import {
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  playerSelect,
  ctx,
  canvas,

  audio,
} from './modules/util.js';

import Playersubject from './modules/player-observer.js';
// import Canvas from './modules/canvas.js';

const prevObv = new Playersubject(prevBtn);
const playObv = new Playersubject(playBtn);
const stopObv = new Playersubject(stopBtn);
const nextObv = new Playersubject(nextBtn);
const favoritesObv = new Playersubject(favoritesBtn);
const SelectObv = new Playersubject(playerSelect);
// const drawCanvas = new Canvas();

playBtn.addEventListener('click', () => {
  // variables
  audio.load();
  audio.play();
  const audioCtx = new AudioContext();
  const audioSrc = audioCtx.createMediaElementSource(audio);
  const audioAnalyser = audioCtx.createAnalyser();
  audioSrc.connect(audioAnalyser);
  audioAnalyser.connect(audioCtx.destination);
  audioAnalyser.fftSize = 512;
  const bufferLength = audioAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  console.log(dataArray);
  function draw() {
    audioAnalyser.getByteFrequencyData(dataArray);
    let count = 0;
    let radius1 = 0;
    const numCircles = 4;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 1; i <= numCircles; i++) {
      radius1 = dataArray[count] / (i + 0.4);
      console.log(dataArray[count]);
      circles(i, radius1);
    }
    count += 1;
    if (dataArray[count] < 0) {
      window.requestAnimationFrame(draw);
    }
  }
  draw();
});

function
