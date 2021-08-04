import {
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  audio,
  closeModal,
  overlay,
  playerSelect,
} from './modules/util.js';
import {
  selectModal,
} from './modules/events.js';
import Playersubject from './modules/player-observer.js';
import Canvas from './modules/canvas.js';

const prevSubj = new Playersubject(prevBtn);
const playSubj = new Playersubject(playBtn);
const stopSubj = new Playersubject(stopBtn);
const nextSubj = new Playersubject(nextBtn);
const favoritesSubj = new Playersubject(favoritesBtn);
const drawCanvas = new Canvas();
const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);

playSubj.suscribe(audioVisual);
stopSubj.suscribe(audioPause);

stopSubj.button.addEventListener('click', () => {
  stopSubj.notify();
});
playSubj.button.addEventListener('click', () => {
  playSubj.notify();
});

function audioPause() {
  audio.pause();
}
function audioVisual() {
  audio.load();
  audio.play();
  const audioAnalyser = audioCtx.createAnalyser();
  audioSrc.connect(audioAnalyser);
  audioAnalyser.connect(audioCtx.destination);
  audioAnalyser.fftSize = 512;
  const bufferLength = audioAnalyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  function draw() {
    audioAnalyser.getByteFrequencyData(dataArray);
    let count = 0;
    let radius1 = 0;
    const numCircles = 4;
    drawCanvas.clear();
    for (let i = 1; i <= numCircles; i++) {
      radius1 = dataArray[count] / (i + 0.4);
      drawCanvas.circles(i, radius1);
    }
    if (audio.play) {
      count += 1;
      window.requestAnimationFrame(draw);
    }
  }
  draw();
}
playerSelect.addEventListener('change', () => {
  selectModal(closeModal, overlay);
});
