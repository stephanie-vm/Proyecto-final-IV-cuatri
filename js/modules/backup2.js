class Canvas {
  constructor(ctx, canvas) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.colorStroke = 'rgba(0, 0, 0, 0.400)';
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height / 2;

    this.circles = function (radius1, colorFill) {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, radius1, 0, 2 * Math.PI);
      this.ctx.fillStyle = colorFill;
      this.ctx.shadowColor = this.colorStroke;
      this.ctx.shadowBlur = 4;
      this.ctx.shadowOffsetX = 0;
      this.ctx.shadowOffsetY = 4;
      this.ctx.fill();
    };

    this.clear = () => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };

    this.draw = function (dataArray, numCircles = 4) {
      let colorFill = '';
      let count = 0;
      let radius1 = 0;
      this.clear();
      for (let i = 1; i <= numCircles; i++) {
        radius1 = dataArray[count] / (i + 0.4);
        console.log(dataArray[count]);
        if (i % 2 === 0) {
          colorFill = 'rgb(253,99,93)';
        } else {
          colorFill = 'rgb(254,157,153)';
        }
        this.circles(radius1, colorFill);
      }
      count++;
      window.requestAnimationFrame(this.draw);
    };
  }
}

export default Canvas;
