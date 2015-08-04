(function() {
  function Player (options) {
    var options = options || Object.create(null);
    this.position = options.position || new Vector(0, 0);
    this.size = options.size || new Size(20, 20);
    this.velocity = options.velocity || new Vector(0, 0);
    this.mass = options.mass || 1;
    this.friction = options.friction || 1;
    this.color = options.color || 'red';
    this.forces = Object.create(null);
  }

  Player.prototype.setForce = function (force, name) {
    this.forces[name] = force;
  };

  Player.prototype.removeForce = function (name) {
    delete this.forces[name];
  };

  Player.prototype.forceVector = function () {
    var vector = new Vector(0, 0);
    for (var key in this.forces) {
      var force = this.forces[key];
      vector = vector.add(force.vector());
    }
    return vector;
  };

  Player.prototype.square = function () {
    return this.size.width * this.size.height / 10000;
  };

  Player.prototype.draw = function (gfx) {
    var ctx = gfx.context;
    gfx.color(this.color);
    gfx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
  };

  Player.prototype.update = function (dt) {
    if (Input.isDown('RIGHT')) {
      this.setForce(new Force(RIGHT, 5), 'movementRight');
    } else {
      this.removeForce('movementRight');
    }
    var Fx = -0.5 * this.square() * Math.pow(this.velocity.x, 3) / Math.abs(this.velocity.x);
    var Fy = -0.5 * this.square() * Math.pow(this.velocity.y, 3) / Math.abs(this.velocity.y);
    Fx = isNaN(Fx) ? 0 : Fx;
    Fy = isNaN(Fy) ? 0 : Fy;
    var ax = this.forceVector().x + (Fx / this.mass);
    var ay = this.forceVector().y + (Fy / this.mass);

    this.velocity.x += ax  * dt;
    this.velocity.y += ay  * dt;

    this.position.x += this.velocity.x * dt*100;
    this.position.y += this.velocity.y * dt*100;

    if (this.position.x >= 700 - this.size.width) {
      this.position.x = 700 - this.size.width;
      this.velocity.x = 0;
    }

    if (this.position.y >= 500 - this.size.height) {
      this.position.y = 500 - this.size.height;
      this.velocity.y = 0;
    }
  };

  //Player.prototype = Rectangle;
  window.Player = Player;
})();




  //this.draw = function (context) {
  //  context.save();
  //
  //  context.translate(this.position.x, this.position.y);
  //  context.beginPath();
  //  context.arc(0, 0, this.size.width, 0, Math.PI*2, true);
  //  context.fillStyle = this.color;
  //  context.strokeStyle = '#000000';
  //
  //  context.fill();
  //  context.closePath();
  //
  //  context.restore();
  //}

  //this.referencePoints = function () {
  //  return {
  //    top: new Point(this.position.x, this.position.y - this.size.width),
  //    right: new Point(this.position.x + this.size.width, this.position.y),
  //    left: new Point(this.position.x - this.size.width, this.position.y),
  //    bottom: new Point(this.position.x, this.position.y + this.size.width),
  //
  //    topRight: new Point(this.position.x + Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y - Math.sqrt(Math.pow(this.size.width, 2) / 2)),
  //    topLeft: new Point(this.position.x - Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y - Math.sqrt(Math.pow(this.size.width, 2) / 2)),
  //    bottomRight: new Point(this.position.x + Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y + Math.sqrt(Math.pow(this.size.width, 2) / 2)),
  //    bottomLedt: new Point(this.position.x - Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y + Math.sqrt(Math.pow(this.size.width, 2) / 2))
  //  };
  //}