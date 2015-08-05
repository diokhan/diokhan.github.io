Scene = function () {
  var objects = [];
  var obstacles = [];
  var enemies = [];
  this.add = function (obj) {
    objects.push(obj);
    if (obj.init) {
      obj.init();
    }
  }
};