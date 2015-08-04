(function () {
  function Game (config) {
    this.config = config || Object.create(null);
    var canvas = document.getElementById('canvas');
    canvas.width = config.canvasSize.width || 700;
    canvas.height = config.canvasSize.height || 500;
    this.ctx = canvas.getContext('2d');
    this.obstacles = [];
    this.enemies = [];
    window.Input = new InputManager();
    this.graphics = new Graphics();
    this.player = new Player();
    this.player.setForce(new Force(DOWN, 9.8), 'gravity');
  }

  var lastTime = Date.now();

  Game.prototype.start = function () {
    var now = Date.now();
    var dt = (now - lastTime) / 1000.0;
    this.update(dt);
    this.draw();

    lastTime = now;
    var self = this;
    window.requestAnimationFrame(function () {
      self.start();
    });
  };

  Game.prototype.update = function (dt) {
    this.player.update(dt);
  };

  Game.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.config.canvasSize.width, this.config.canvasSize.height);
    this.player.draw(this.graphics);
    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
    this.enemies.forEach(function(enemy) {
      enemy.draw();
    });
  };

  window.Game = Game;
})();