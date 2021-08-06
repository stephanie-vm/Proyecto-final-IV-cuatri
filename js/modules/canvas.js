// canvas
const canvas = document.querySelector('canvas');

class Canvas {
  constructor() {
    this.ctx = canvas.getContext('2d');
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
  }

  clear() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  circles(i, radius1) {
    let colorFill = '';
    const colorStroke = 'rgba(0, 0, 0, 0.400)';
    if (i % 2 === 0) {
      colorFill = 'rgb(253,99,93)';
    } else {
      colorFill = 'rgb(254,157,153)';
    }
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, radius1, 0, 2 * Math.PI);
    this.ctx.fillStyle = colorFill;
    this.ctx.shadowColor = colorStroke;
    this.ctx.shadowBlur = 4;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 4;
    this.ctx.fill();
  }
}

export default Canvas;
