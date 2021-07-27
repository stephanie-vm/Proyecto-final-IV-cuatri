import {
  canvas,
  ctx,
} from './util.js';

class Canvas {
  constructor{
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }
  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  circles(i, radius1) {
    let colorFill = '';
    const colorStroke = 'rgba(0, 0, 0, 0.400)';
    if (i % 2 === 0) {
      colorFill = 'rgb(253,99,93)';
    } else {
      colorFill = 'rgb(254,157,153)';
    }
    ctx.beginPath();
    ctx.arc(x, y, radius1, 0, 2 * Math.PI);
    ctx.fillStyle = colorFill;
    ctx.shadowColor = colorStroke;
    ctx.shadowBlur = 4;
    ctx.shadowOffsetX = 0;
    ctx.shadowOffsetY = 4;
    ctx.fill();
  }
}

export default Canvas;
