"use strict";

var
  UP = new Vector(0, -1),
  DOWN = new Vector(0, 1),
  LEFT = new Vector(-1, 0),
  RIGHT = new Vector(1, 0);

var CONFIG = {
  canvasSize: {
    width: 700,
    height: 500
  }
};

function updatePlayer (dt) {

}

var game = new Game(CONFIG);
game.start();

//"use strict";
//
/////////////
//// Classes
////////////
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
//  this.restitution = options.restitution || -1;
//  this.friction = options.friction || 1;
//  this.color = options.color || 'red';
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
//    context.fillStyle = this.color;
//    context.strokeStyle = '#000000';
//
//    context.fill();
//    context.closePath();
//
//    context.restore();
//  }
//
//  this.referencePoints = function () {
//    return {
//      top: new Point(this.position.x, this.position.y - this.size.width),
//      right: new Point(this.position.x + this.size.width, this.position.y),
//      left: new Point(this.position.x - this.size.width, this.position.y),
//      bottom: new Point(this.position.x, this.position.y + this.size.width),
//
//      topRight: new Point(this.position.x + Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y - Math.sqrt(Math.pow(this.size.width, 2) / 2)),
//      topLeft: new Point(this.position.x - Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y - Math.sqrt(Math.pow(this.size.width, 2) / 2)),
//      bottomRight: new Point(this.position.x + Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y + Math.sqrt(Math.pow(this.size.width, 2) / 2)),
//      bottomLedt: new Point(this.position.x - Math.sqrt(Math.pow(this.size.width, 2) / 2), this.position.y + Math.sqrt(Math.pow(this.size.width, 2) / 2))
//    };
//  }
//}
//
//function Hook(options) {
//  options = options || Object.create(null);
//  const from = options.from || new Point(0, 0);
//  const to = options.to || new Point(1, 1);
//  this.position = options.position;
//  this.color = options.color || 'black';
//  this.solids = options.solids || [];
//
//  if (this.position == null) {
//    const xWhenYis0 = (0 - from.y) / (to.y - from.y) * (to.x - from.x) + from.x;
//    const yWhenXis0 = (0 - from.x) / (to.x - from.x) * (to.y - from.y) + from.y;
//    const xWhenYisHeight = (canvasSize.height - from.y) / (to.y - from.y) * (to.x - from.x) + from.x;
//    const yWhenXisWidth = (canvasSize.width - from.x) / (to.x - from.x) * (to.y - from.y) + from.y;
//
//    this.position = new Point(0, 0);
//    // top
//    if (xWhenYis0 >= 0 && xWhenYis0 <= canvasSize.width && from.y > to.y) {
//      this.position = new Point(xWhenYis0, 0);
//    }
//    // bottom
//    if (xWhenYisHeight >= 0 && xWhenYisHeight <= canvasSize.width && from.y < to.y) {
//      this.position = new Point(xWhenYisHeight, canvasSize.height);
//    }
//    // left
//    if (yWhenXis0 >= 0 && yWhenXis0 <= canvasSize.height && from.x > to.x) {
//      this.position = new Point(0, yWhenXis0);
//    }
//    // right
//    if (yWhenXisWidth >= 0 && yWhenXisWidth <= canvasSize.height && from.x < to.x) {
//      this.position = new Point(canvasSize.width, yWhenXisWidth);
//    }
//
//    let minLineWidth = Infinity,
//      minLinePoint = null;
//    for (let i = 0, len = solids.length; i < len; i++) {
//      if (!solids[i].isHookable) {
//        continue;
//      }
//      let lines = solids[i].lineSegments();
//      for (let j = 0, linesLength = lines.length; j < linesLength; j++) {
//        const ka = ((from.x - this.position.x) * (lines[j][0].y - this.position.y) - (from.y - this.position.y) * (lines[j][0].x - this.position.x)) / ((from.y - this.position.y) * (lines[j][1].x - lines[j][0].x) - (from.x - this.position.x) * (lines[j][1].y - lines[j][0].y));
//        if (ka <= 0 || ka >= 1) {
//          continue;
//        }
//        const intersectionX = lines[j][0].x + ka * (lines[j][1].x - lines[j][0].x),
//          intersectionY = lines[j][0].y + ka * (lines[j][1].y - lines[j][0].y);
//        const lineWidth = Math.sqrt(Math.pow(intersectionX - from.x, 2) + Math.pow(intersectionY - from.y, 2));
//        if (lineWidth < minLineWidth) {
//          minLineWidth = lineWidth;
//          minLinePoint = new Point(intersectionX, intersectionY);
//        }
//      }
//    }
//    if (minLinePoint !== null) {
//      this.position = minLinePoint;
//    }
//  }
//
//  this.draw = function (context, fromObject) {
//    context.beginPath();
//    context.lineWidth = .5;
//    context.strokeStyle = this.color;
//    context.moveTo(fromObject.position.x, fromObject.position.y);
//    context.lineTo(hook.position.x, hook.position.y);
//    context.stroke();
//    context.closePath();
//  };
//}
//
//function Solid(options) {
//  options = options || Object.create(null);
//  this.position = options.position || new Point(0, 0);
//  this.size = options.size || new Size(1, 1);
//  this.color = options.color || '#000000';
//  this.isHookable = options.isHookable == null ? false : options.isHookable;
//  this.isCollidable = options.isCollidable == null ? false : options.isCollidable;
//
//  this.draw = function (context) {
//    context.beginPath();
//    context.rect(this.position.x, this.position.y, this.size.width, this.size.height);
//    context.fillStyle = this.color;
//    context.strokeStyle = this.color;
//    context.stroke();
//    context.fill();
//  };
//
//  this.lineSegments = function () {
//    return [
//      [new Point(this.position.x, this.position.y), new Point(this.position.x + this.size.width, this.position.y)],
//      [new Point(this.position.x + this.size.width, this.position.y), new Point(this.position.x + this.size.width, this.position.y + this.size.height)],
//      [new Point(this.position.x, this.position.y + this.size.height), new Point(this.position.x + this.size.width, this.position.y + this.size.height)],
//      [new Point(this.position.x, this.position.y), new Point(this.position.x, this.position.y + this.size.height)]
//    ];
//  }
//}
//
///////////
//// Canvas
///////////
//
//const solids = [
//  new Solid({
//    position: new Point(100, 20),
//    size: new Size(40, 40),
//    isHookable: true,
//    isCollidable: false
//  }),
//  new Solid({
//    position: new Point(360, 20),
//    size: new Size(40, 40),
//    isHookable: true,
//    isCollidable: false
//  }),
//  new Solid({
//    position: new Point(230, 80),
//    size: new Size(40, 40),
//    isHookable: false,
//    isCollidable: true,
//    color: 'grey'
//  })
//];
//
//let rectangle = new Rectangle({
//  position: new Point(250, 140),
//  size: new Size(15, 15),
//  mass: 2,
//  restitution: -0.6,
//  friction: 0.8
//});
//rectangle.setForce(new Force(DOWN, 9.8), 'gravity');
//
//let canvas,
//  context,
//  canvasSize,
//  loopTimer,
//  hook = null,
//  wind = new Force(LEFT, 0),
//  play = true,
//  positions = [],
//  hookPositions = [],
//  positionCounter = 0,
//  slowMo = false;
//
//const frameRate = 1 / 60,
//  frameRateSlow = 1 / 240,
//  frameDelay = frameRate * 1000;
//
//const WORLD = {
//  rho: 1.22,
//  hookStrength: 20
//};
//
//function loop() {
//
//  if (hook) {
//    rectangle.setForce(new Force(Vector.fromPoints(rectangle.position, hook.position), WORLD.hookStrength), 'hook');
//  }
//  let Fx = -0.5 * rectangle.square() * WORLD.rho * Math.pow(rectangle.velocity.x, 3) / Math.abs(rectangle.velocity.x);
//  let Fy = -0.5 * rectangle.square() * WORLD.rho * Math.pow(rectangle.velocity.y, 3) / Math.abs(rectangle.velocity.y);
//
//  Fx = isNaN(Fx) ? 0 : Fx;
//  Fy = isNaN(Fy) ? 0 : Fy;
//
//  const currentFrameRate = slowMo ? frameRateSlow : frameRate;
//
//  const ax = rectangle.forceVector().x + (Fx / rectangle.mass);
//  const ay = rectangle.forceVector().y + (Fy / rectangle.mass);
//
//  rectangle.velocity.x += ax / WORLD.rho * frameRate;
//  rectangle.velocity.y += ay / WORLD.rho * frameRate;
//
//  rectangle.position.x += rectangle.velocity.x * currentFrameRate*100;
//  rectangle.position.y += rectangle.velocity.y * currentFrameRate*100;
//
//  const restitution = rectangle.restitution,
//    friction = rectangle.friction;
//
//  if (rectangle.position.y >= canvasSize.height - rectangle.size.height) {
//    rectangle.velocity.y *= restitution;
//    rectangle.velocity.x *= friction;
//    rectangle.position.y = canvasSize.height - rectangle.size.height;
//  }
//  if (rectangle.position.x >= canvasSize.width - rectangle.size.width) {
//    rectangle.velocity.x *= restitution;
//    rectangle.velocity.y *= friction;
//    rectangle.position.x = canvasSize.width - rectangle.size.width;
//  }
//  if (rectangle.position.x <= rectangle.size.width)  {
//    rectangle.velocity.x *= restitution;
//    rectangle.velocity.y *= friction;
//    rectangle.position.x = rectangle.size.width;
//  }
//  if (rectangle.position.y <= rectangle.size.height) {
//    rectangle.velocity.y *= restitution;
//    rectangle.velocity.x *= friction;
//    rectangle.position.y = rectangle.size.height;
//  }
//
//  const referencePoints = rectangle.referencePoints();
//
//  context.clearRect(0, 0, canvasSize.width, canvasSize.height);
//  for (let i = 0, len = solids.length; i < len; i++) {
//    solids[i].draw(context);
//
//    if (!solids[i].isCollidable) {
//      continue;
//    }
//    if (context.isPointInPath(referencePoints.top.x, referencePoints.top.y)) {
//      rectangle.velocity.y *= restitution;
//      rectangle.velocity.x *= friction;
//      rectangle.position.y = solids[i].position.y + solids[i].size.height + rectangle.size.width;
//    }
//    if (context.isPointInPath(referencePoints.bottom.x, referencePoints.bottom.y)) {
//      rectangle.velocity.y *= restitution;
//      rectangle.velocity.x *= friction;
//      rectangle.position.y = solids[i].position.y - rectangle.size.width;
//    }
//    if (context.isPointInPath(referencePoints.right.x, referencePoints.right.y)) {
//      rectangle.velocity.x *= restitution;
//      rectangle.velocity.y *= friction;
//      rectangle.position.x = solids[i].position.x - rectangle.size.width - 1;
//    }
//    if (context.isPointInPath(referencePoints.left.x, referencePoints.left.y)) {
//      rectangle.velocity.x *= restitution;
//      rectangle.velocity.y *= friction;
//      rectangle.position.x = solids[i].position.x + solids[i].size.width + rectangle.size.width + 1;
//    }
//  }
//  if (hook !== null) {
//    hook.draw(context, rectangle);
//  }
//
//  //solid.draw(context);
//  rectangle.draw(context);
//  /*    for (let key in referencePoints) {
//   context.beginPath();
//   context.rect(referencePoints[key].x - 1, referencePoints[key].y - 1, 2, 2);
//   context.fillStyle = 'black';
//   context.fill();
//   }*/
//
//  if (slowMo) {
//    for (let i = 0, len = positions.length; i < len; i++) {
//      let trail = new Rectangle({
//        position: positions[i],
//        color: 'rgba(255, 0, 0, ' + i / 10 + ')',
//        size: rectangle.size
//      });
//      trail.draw(context);
//    }
//    if (positions.length == 5) {
//      positions.shift();
//    }
//    positions.push(new Point(rectangle.position.x, rectangle.position.y));
//    if (hook) {
//      for (let i = 0, len = hookPositions.length; i < len; i++) {
//        let trail = new Hook({
//          position: hookPositions[i],
//          color: 'rgba(0, 0, 0, ' + i / 10 + ')'
//        });
//        trail.draw(context, {position: positions[i]});
//      }
//      if (hookPositions.length == 5) {
//        hookPositions.shift();
//      }
//      hookPositions.push({position: new Point(hook.position.x, hook.position.y)});
//    }
//  }
//
//  if (play) {
//    requestAnimationFrame(loop);
//  }
//}
//
//function setup() {
//  canvas = document.querySelector('canvas');
//  canvasSize = new Size(canvas.width, canvas.height);
//  context = canvas.getContext('2d');
//  loop();
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
//    play = !play;
//    requestAnimationFrame(loop);
//  }
//});
//
//let mouseDownEvent = 'ontouchstart' in document.documentElement ? 'touchstart' : 'mousedown';
//document.addEventListener(mouseDownEvent, function (event) {
//  if (event.target.matches('canvas')) {
//    event.preventDefault();
//    let coordinates = mouseDownEvent === 'touchstart' ? event.touches[0] : event;
//    hook = new Hook({
//      to: new Point(Math.min(coordinates.pageX - canvas.offsetLeft, canvasSize.width), Math.min(coordinates.pageY - canvas.offsetTop, canvasSize.height)),
//      from: rectangle.position
//    });
//  }
//});
//
//let mouseUpEvent = 'ontouchend' in document.documentElement ? 'touchend' : 'mouseup';
//document.addEventListener(mouseUpEvent, function (event) {
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
//  else if (event.target.matches('input[name=wind]')) {
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
//
//  else if (event.target.matches('input[name=slowmo]')) {
//    slowMo = event.target.checked;
//    positions = [];
//  }
//});


Game.start = function () {

};
