(function () {
  function Graphics () {
    var
      canvas = document.getElementById('canvas'),
      context = canvas.getContext('2d'),
      bg = '#fff';
    var graphics = {
      canvas: canvas,
      context: context,
      circle: function (x, y, r) {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
        context.closePath();
      },
      color: function (color) {
        context.fillStyle = context.strokeStyle = color;
      },
      rect: function (x, y, width, height) {
        context.fillRect(x, y, width, height);
      },
      borderRect: function (x, y, w, h) {
        context.strokeRect(x, y, w, h);
      },
      line: function (x1, y1, x2, y2) {
        context.beginPath();
        context.moveTo(x1, y1);
        context.lineTo(x2, y2);
        context.stroke();
        context.closePath();
      }
    };

    context.fillStyle = context.strokeStyle = bg;
    return graphics;
  }

  window.Graphics = Graphics;
})();