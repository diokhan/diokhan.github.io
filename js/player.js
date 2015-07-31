(function() {
  function Player (position, size, color, velocity, mass) {
    this.position = position || new Vector(0, 0);
    this.size = size || new Size(20, 20);
    this.color = color;
    this.velocity = velocity || new Vector(0, 0);
    this.mass = mass || 1;
    var forces = Object.create(null);

    this.setForce = function (force, name) {
      forces[name] = force;
    };

    this.removeForce = function (name) {
      delete forces[name];
    };
  }

  Player.prototype = Rectangle;

})();