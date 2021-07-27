import {
  canvas, ctx, audio, playBtn, stopBtn,
} from './util.js';

function okey(stopFrame) {
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
}
playBtn.addEventListener('click', () => {
  const stopFrame = false;
  okey(stopFrame);
});
  stopBtn.addEventListener('click', () => {
    const stopFrame = true;
    audio.pause();
    drawCircles(stopFrame);
  });
