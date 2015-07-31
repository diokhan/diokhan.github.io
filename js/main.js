"use strict";

var
  UP = new Vector(0, -1),
  DOWN = new Vector(0, 1),
  LEFT = new Vector(-1, 0),
  RIGHT = new Vector(1, 0);

function Game (config) {
  this.config = config || Object.create(null);
  var canvas = document.getElementById('canvas');
  canvas.width = config.canvasSize.width || 700;
  canvas.height = config.canvasSize.height || 500;
  this.ctx = canvas.getContext('2d');
}

Game.start = function () {

};



///////////
// Classes
//////////
//
//function Point(x, y) {
//  this.x = x;
//  this.y = y;
//}
//
//function Size(width, height) {
//  this.width = width;
//  this.height = height;
//}
//
//function Vector(x, y) {
//  this.x = x;
//  this.y = y;
//
//  this.add = function (vector) {
//    return new Vector(this.x + vector.x, this.y + vector.y);
//  }
//
//  this.unit = function () {
//    let divisor = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
//    return new Vector(this.x / divisor, this.y / divisor);
//  }
//}
//
//Vector.fromPoints = function (pointFrom, pointTo) {
//  return new Vector(pointTo.x - pointFrom.x, pointTo.y - pointFrom.y);
//}
//
//const UP = new Vector(0, -1),
//  DOWN = new Vector(0, 1),
//  LEFT = new Vector(-1, 0),
//  RIGHT = new Vector(1, 0);
//
//function Force(vector, strength) {
//  this.unit = vector;
//  this.strength = strength;
//
//  this.vector = function () {
//    let z = Math.sqrt(Math.pow(this.strength, 2) / (Math.pow(this.unit.x, 2) + Math.pow(this.unit.y, 2)));
//    return new Vector(this.unit.x * z, this.unit.y * z);
//  }
//}
//
//// TODO: abstract this piece of shit
//function Rectangle(options) {
//  options = options || Object.create(null);
//  this.position = options.position || new Point(0, 0);
//  this.velocity = options.velocity || new Vector(0, 0);
//  this.size = options.size || new Size(1, 1);
//  this.mass = options.mass || 1;
//  this.restitution = options.restitution || -0.7;
//
//  const forces = Object.create(null);
//
//  this.setForce = function (force, name) {
//    forces[name] = force;
//  };
//
//  this.removeForce = function (name) {
//    delete forces[name];
//  };
//
//  this.forceVector = function () {
//    let vector = new Vector(0, 0);
//    for (var key in forces) {
//      let force = forces[key];
//      vector = vector.add(force.vector());
//    }
//    return vector;
//  }
//
//  this.square = function () {
//    return this.size.width * this.size.height / 10000;
//  }
//
//  this.draw = function (context) {
//    context.save();
//
//    context.translate(this.position.x, this.position.y);
//    context.beginPath();
//    context.arc(0, 0, this.size.width, 0, Math.PI*2, true);
//    context.fill();
//    context.closePath();
//
//    context.restore();
//  }
//}
//
//function Hook(options) {
//  options = options || Object.create(null);
//  this.position = options.position || new Point(0, 0);
//
//  this.draw = function (context, fromObject) {
//    context.beginPath();
//    context.moveTo(fromObject.position.x, fromObject.position.y);
//    context.lineTo(hook.position.x, hook.position.y);
//    context.stroke();
//    context.closePath();
//  };
//}
//
///////////
//// Canvas
///////////
//
//let rectangle = new Rectangle({
//  position: new Point(250, 50),
//  size: new Size(15, 15)
//});
//rectangle.setForce(new Force(DOWN, 9.8), 'gravity');
//
//let canvas, context, canvasSize, loopTimer, hook = null, wind = new Force(LEFT, 0);
//
//const frameRate = 1 / 400,
//  frameDelay = frameRate * 1000;
//
//const WORLD = {
//  rho: 1,
//  hookStrength: 28
//};
//
//function loop() {
//  if (hook) {
//    rectangle.setForce(new Force(Vector.fromPoints(rectangle.position, hook.position), WORLD.hookStrength), 'hook');
//  }
//  let Fx = -0.5 * rectangle.square() * WORLD.rho * Math.pow(rectangle.velocity.x, 3) / Math.abs(rectangle.velocity.x);
//  let Fy = -0.5 * rectangle.square() * WORLD.rho * Math.pow(rectangle.velocity.y, 3) / Math.abs(rectangle.velocity.y);
//
//  Fx = isNaN(Fx) ? 0 : Fx;
//  Fy = isNaN(Fy) ? 0 : Fy;
//
//  const ax = rectangle.forceVector().x + (Fx / rectangle.mass);
//  const ay = rectangle.forceVector().y + (Fy / rectangle.mass);
//
//  rectangle.velocity.x += ax * frameRate;
//  rectangle.velocity.y += ay * frameRate;
//
//  rectangle.position.x += rectangle.velocity.x * frameRate*100;
//  rectangle.position.y += rectangle.velocity.y * frameRate*100;
//
//  if (rectangle.position.y > canvasSize.height - rectangle.size.height) {
//    rectangle.velocity.y *= rectangle.restitution;
//    rectangle.position.y = canvasSize.height - rectangle.size.height;
//  }
//  if (rectangle.position.x > canvasSize.width - rectangle.size.width) {
//    rectangle.velocity.x *= rectangle.restitution;
//    rectangle.position.x = canvasSize.width - rectangle.size.width;
//  }
//  if (rectangle.position.x < rectangle.size.width)  {
//    rectangle.velocity.x *= rectangle.restitution;
//    rectangle.position.x = rectangle.size.width;
//  }
//  if (rectangle.position.y < rectangle.size.height) {
//    rectangle.velocity.y *= rectangle.restitution;
//    rectangle.position.y = rectangle.size.height;
//  }
//
//  context.clearRect(0, 0, canvasSize.width, canvasSize.height);
//  rectangle.draw(context);
//
//  if (hook !== null) {
//    hook.draw(context, rectangle);
//  }
//}
//
//function setup() {
//  canvas = document.querySelector('canvas');
//  canvasSize = new Size(canvas.width, canvas.height);
//  context = canvas.getContext('2d');
//
//  context.fillStyle = 'red';
//  context.strokeStyle = '#000000';
//  loopTimer = setInterval(loop, frameDelay);
//}
//
//setup();
//
////////////////////
//// Event Listeners
////////////////////
//
//document.addEventListener('click', function (event) {
//  if (event.target.matches('button')) {
//    if (loopTimer == null) {
//      loopTimer = setInterval(loop, frameDelay);
//    } else {
//      clearInterval(loopTimer);
//      loopTimer = null;
//    }
//  }
//});
//
//document.addEventListener('mousedown', function (event) {
//  if (event.target.matches('canvas')) {
//    hook = new Hook({
//      position: new Point(Math.min(event.pageX - canvas.offsetLeft, canvasSize.width), 0)
//    });
//  }
//});
//
//document.addEventListener('mouseup', function (event) {
//  if (event.target.matches('canvas')) {
//    hook = null;
//    rectangle.removeForce('hook');
//  }
//});
//
//document.addEventListener('change', function (event) {
//  if (event.target.matches('input[type=range]')) {
//    wind.strength = event.target.value;
//    document.querySelector('span').innerText = event.target.value;
//  }
//
//  else if (event.target.matches('input[type=checkbox]')) {
//    if (event.target.checked) {
//      rectangle.setForce(wind, 'wind');
//    } else {
//      rectangle.removeForce('wind');
//    }
//  }
//
//  else if (event.target.matches('input[name=direction]')) {
//    if (event.target.value == 'left' && event.target.checked) {
//      wind.unit = LEFT;
//    }
//
//    else if (event.target.value == 'right' && event.target.checked) {
//      wind.unit = RIGHT;
//    }
//  }
//});