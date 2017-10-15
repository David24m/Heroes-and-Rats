var assert = require('assert');
var Heroes = require('../heroes.js');
var Missions = require('../missions.js')
var Foods = require('../foods.js')
var Weapons = require('../weapons.js')

describe("Heroes Test", function(){

  beforeEach(function(){
    hero1 = new Heroes("Ezio Auditore", 100, "pizza");
    mission1 = new Missions(5, 4, 100, false);
    mission2 = new Missions(2, 1, 25, true);
    mission3 = new Missions(3, 5, 70, false);
    mission4 = new Missions(5, 2, 20, false);
    mission5 = new Missions(1, 1, 10, true);
    food1 = new Foods("pizza", 20, false);
    food2 = new Foods("burger", 15, false);
    food3 = new Foods("hotdog", 10, true);
    weapon1 = new Weapons("Hidden Blade", 60);
    weapon2 = new Weapons("Apple of Eden", 30);
  })

  it("has a name", function(){
    assert.strictEqual(hero1.name, "Ezio Auditore");
  })

  it("has a health value", function() {
    assert.strictEqual(hero1.health, 100);
  })

  it("has a favourite food", function() {
    assert.strictEqual(hero1.favourite_food, "pizza");
  })

  it("has an ability to talk", function() {
    assert.strictEqual(hero1.talk(), "My name is Ezio Auditore");
  })

  it("has a mission list which starts empty", function() {
    assert.strictEqual(hero1.quest_log.length, 0);
  })

  it("has an ability to add missions to", function() {
    hero1.addMission(mission1);
    assert.strictEqual(hero1.quest_log.length, 1);
  })

  it("can remove completed missions for quest log", function() {
    hero1.addMission(mission1);
    hero1.addMission(mission2);
    hero1.removeMission(mission1);
    assert.strictEqual(hero1.quest_log.length, 1);
  })

  it("can replenish health by 1.5 when eating favourite food", function() {
    hero1.eatFood(food1);
    assert.strictEqual(hero1.health, 130);
  })

  it("can replenish health by regular amount if not favourite food", function() {
    hero1.eatFood(food2);
    assert.strictEqual(hero1.health, 115);
  })

  it("can sort missions into urgency order", function() {
    hero1.addMission(mission2);
    hero1.addMission(mission1);
    assert.deepEqual(hero1.sortMissions(), [mission1, mission2]);
  })

  it("can tell which missions are not completed", function() {
    hero1.addMission(mission1);
    hero1.addMission(mission2);
    hero1.addMission(mission3);
    hero1.addMission(mission4);
    hero1.addMission(mission5);
    assert.deepEqual(hero1.listIncompleteMissions(), [mission1, mission3, mission4]);
  })

  it("can lose health if eating poisonous food", function() {
    hero1.eatFood(food3);
    assert.strictEqual(hero1.health, 75);
  })

  it("has a weapons pouch which starts as empty", function() {
    assert.strictEqual(hero1.pouch.length, 0);
  })

  it("has an ability to add a weapon", function() {
    hero1.addWeapon(weapon1);
    assert.strictEqual(hero1.pouch.length, 1);
  })

  it("can drop a weapon out of the pouch", function() {
    hero1.addWeapon(weapon1);
    hero1.addWeapon(weapon2);
    hero1.dropWeapon(weapon1);
    assert.strictEqual(hero1.pouch.length, 1);
  })

  it("has ability to lose health when hit", function() {
    hero1.hitByWeapon(weapon2);
    assert.strictEqual(hero1.health, 70);
  })

})
