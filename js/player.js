import {
  prevBtn,
  playBtn,
  stopBtn,
  nextBtn,
  favoritesBtn,
  audio,
  playerSelect,
  playListParam,
  songParam,
  artistPlaylistParam,
  artistSongLink,
} from './modules/util.js';
import {
  selectModal,
} from './modules/events.js';
import Playersubject from './modules/player-observer.js';
import Canvas from './modules/canvas.js';
// general function, get api and data
import { getApi } from './modules/services.js';

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
  audioCtx.resume();

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

function songPlay(i, array) {
  let index = i;
  audio.src = array[index].audio;
  console.log(index);
  function nextsong() {
    index++;
    if (index > array.length - 1) {
      index = 0;
    }
    audio.pause();
    songPlay(index, array);
    audio.load();
    audio.play();
  }
  function prevsong() {
    index--;
    if (index < 0) {
      index = array.length - 1;
    }
    songPlay(index, array);
    audio.load();
    audio.play();
  }
  nextSubj.subscribe(nextsong);
  prevSubj.subscribe(prevsong);
}

async function selectPlaylist() {
  if (playListParam === 'artist') {
    const songsLink = `${artistSongLink}/${artistPlaylistParam}`;
    const viewSongs = await getApi(songsLink);
    console.log(viewSongs);
    for (let i = 0; i < viewSongs.length; i++) {
      if (viewSongs[i].id === songParam) {
        songPlay(i, viewSongs);
      }
    }
  }
}

window.onload = selectPlaylist();
playSubj.subscribe(audioVisual);
stopSubj.subscribe(audioPause);
selectSubj.subscribe(selectModal);
