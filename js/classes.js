(function () {
  function Vector (x, y) {
    this.x = x;
    this.y = y;
  }

  window.Vector = Vector;

  function Size (width, height) {
    this.width = width || 0;
    this.height = height || 0;
  }

  window.Size = Size;

  function Force (vector, strength) {
    this.unit = vector;
    this.strength = strength;

    this.vector = function () {
      var z = Math.sqrt(Math.pow(this.strength, 2) / (Math.pow(this.unit.x, 2) + Math.pow(this.unit.y, 2)));
      return new Vector(this.unit.x * z, this.unit.y * z);
    }
  }

  window.Force = Force;

  function Rectangle (position, size, color) {
    this.x = position.x || 0;
    this.y = position.y || 0;
    this.width = size.width || 0;
    this.height = size.height || 0;
    this.color = color || 'red';
  }

  Rectangle.prototype.draw = function (ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  window.Rectangle = Rectangle;
})();