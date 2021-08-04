import {
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  audio,
  playerSelect,
} from './modules/util.js';
import {
  selectModal,
} from './modules/events.js';
import Playersubject from './modules/player-observer.js';
import Canvas from './modules/canvas.js';

const selectSubj = new Playersubject(playerSelect, 'change');
const prevSubj = new Playersubject(prevBtn, 'click');
const playSubj = new Playersubject(playBtn, 'click');
const stopSubj = new Playersubject(stopBtn, 'click');
const nextSubj = new Playersubject(nextBtn, 'click');
const favoritesSubj = new Playersubject(favoritesBtn);
const drawCanvas = new Canvas();
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);

function audioPause() {
  audio.pause();
}
function audioVisual() {
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

playSubj.subscribe(audioVisual);
stopSubj.subscribe(audioPause);
selectSubj.subscribe(selectModal);
