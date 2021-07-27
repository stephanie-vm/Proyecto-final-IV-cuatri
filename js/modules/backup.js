import {
  canvas, ctx, audio, playBtn, stopBtn,
} from './util.js';

function okey(stopFrame) {
  // variables
  audio.load();
  audio.play();
  const audioCtx = new AudioContext();// se instancia un nuevo audio con la API
  const audioSrc = audioCtx.createMediaElementSource(audio);// src de la instancia en este caso se le pasa el audio en cuestion
  const audioAnalyser = audioCtx.createAnalyser();// analiza el audio para que js pueda usar todo lo que necesite para el proceso como frecuencias, etc
  audioSrc.connect(audioAnalyser);// conecta el audio con el analizador
  audioAnalyser.connect(audioCtx.destination);// connecta el audio con la salida de audio
  audioAnalyser.fftSize = 512; // obtiene vibraciones del audio basandose en una frecuencia
  const bufferLength = audioAnalyser.frequencyBinCount;// hace una coversion de la cantidad de datos obtenidos por el analizador para utilizarlo en el vizualizador
  const dataArray = new Uint8Array(bufferLength);// representan un array de enteros sin signo de 8 bits.
  console.log(dataArray);

  function drawCircles() {
    audioAnalyser.getByteFrequencyData(dataArray);
    const colorStroke = 'rgba(0, 0, 0, 0.400)';
    const x = canvas.width / 2;
    const y = canvas.height / 2;
    let colorFill = '';
    let c = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 1; i <= 4; i++) {
      const radius1 = dataArray[c] / (i + 0.4);
      console.log(dataArray[c]);
      ctx.beginPath();
      if (i % 2 === 0) {
        colorFill = 'rgb(253,99,93)';
      } else {
        colorFill = 'rgb(254,157,153)';
      }
      ctx.arc(x, y, radius1, 0, 2 * Math.PI);
      ctx.fillStyle = colorFill;
      ctx.shadowColor = colorStroke;
      ctx.shadowBlur = 4;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 4;
      ctx.fill();
    }

    c += 1;
    if (!stopFrame) {
      window.requestAnimationFrame(drawCircles);
      return;
    }
  }
  drawCircles(stopFrame);
  stopBtn.addEventListener('click', () => {
    const stopFrame = true;
    audio.pause();
    drawCircles(stopFrame);
  });
}
playBtn.addEventListener('click', () => {
  const stopFrame = false;
  okey(stopFrame);
});

