var Heroes = function(name, health, favourite_food) {
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.talk = function() {
      return ("My name is " + this.name);
    }
  this.quest_log = [];
  this.pouch = [];
}

Heroes.prototype.addMission = function (mission) {
  this.quest_log.push(mission);
};

Heroes.prototype.removeMission = function (mission) {
  this.quest_log.forEach(function(quest) {
  if(quest === mission) {
    this.quest_log.splice(this.quest_log.indexOf(quest), 1);
    }
  }.bind(this))
}

Heroes.prototype.eatFood = function (food) {
  if(food.poisonous === true) return this.health -=25;

  if(this.favourite_food === food.name) {
    this.health += (food.replenishment_value * 1.5);
  } else {
    this.health += food.replenishment_value;
  }
};

Heroes.prototype.sortMissions = function () {
  var sortedMissions = [];
    sortedMissions = this.quest_log.sort(function(a, b){
      return b.urgency - a.urgency;
    })
    return sortedMissions;
};

Heroes.prototype.listIncompleteMissions = function () {
  return this.quest_log.filter(function(tasks){
    return tasks.completed === false;
  })
};

Heroes.prototype.addWeapon = function (weapon) {
  this.pouch.push(weapon);
};

Heroes.prototype.dropWeapon = function (weapon) {
  this.pouch.forEach(function(item) {
  if(item === weapon) {
    this.pouch.splice(this.pouch.indexOf(item), 1);
    }
  }.bind(this))
}

Heroes.prototype.hitByWeapon = function (weapon) {
  this.health -= weapon.hit_value;
}

module.exports = Heroes;
