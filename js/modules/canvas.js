import {
  canvas, ctx, audio,
} from './util.js';
// variables

const audioCtx = new AudioContext();
const audioSrc = audioCtx.createMediaElementSource(audio);
const audioAnalyser = audioCtx.createAnalyser();
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
