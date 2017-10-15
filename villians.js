var Villians = function(name, health) {
  this.name = name;
  this.health = health;
  this.talk = function() {
      return ("You will never defeat me! I am the pope! I am " + this.name);
    }
  this.pouch = [];
}

Villians.prototype.addWeapon = function (weapon) {
  this.pouch.push(weapon);
};

Villians.prototype.dropWeapon = function (weapon) {
  this.pouch.forEach(function(item) {
  if(item === weapon) {
    this.pouch.splice(this.pouch.indexOf(item), 1);
    }
  }.bind(this))
}

Villians.prototype.hitByWeapon = function (weapon) {
  this.health -= weapon.hit_value;
}

module.exports = Villians;
