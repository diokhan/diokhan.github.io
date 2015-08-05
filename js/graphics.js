Graphics = function (id) {
  var
    canvas = document.getElementById(id),
    context = canvas.getContext('2d'),
    color = '#FFF',
    graphics = {
      canvas: canvas,
      context: context,
      clear: function (c) {
        if (c) {
          context.fillStyle = c;
        } else {
          context.fillStyle = '#000';
        }
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = color;
      },
      color: function (c) {
        color = c;
        context.fillStyle = context.strokeStyle = color;
      },
      fill: function (c) {
        color = c;
        context.fillStyle = color;
      },
      stroke: function (c) {
        color = c;
        context.strokeStyle = color;
      },
      rect: function (x, y, width, height) {
        context.fillRect(x, y, width, height);
      },
      circle: function (x, y, r) {
        context.beginPath();
        context.arc(x, y, r, 0, Math.PI * 2);
        context.fill();
        context.closePath();
      }
    };
  context.fillStyle = context.strokeStyle = color;
  return graphics;

};