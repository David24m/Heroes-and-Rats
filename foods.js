var Foods = function(name, replenishment_value, poisonous) {
  this.name = name;
  this.replenishment_value = replenishment_value;
  this.poisonous = poisonous;
}

Foods.prototype.touchFood = function (rat1) {
  this.poisonous = true;
};

module.exports = Foods;
