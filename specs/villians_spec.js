var assert = require('assert');
var Villians = require('../villians.js');
var Weapons = require('../weapons.js');

describe("Villians Test", function(){

  beforeEach(function(){
    villian1 = new Villians("Rodrigo Borgia", 100);
    weapon1 = new Weapons("Hidden Blade", 60);
    weapon2 = new Weapons("Apple of Eden", 30);
  })

  it("has a name", function(){
    assert.strictEqual(villian1.name, "Rodrigo Borgia");
  })

  it("has a health value", function() {
    assert.strictEqual(villian1.health, 100);
  })

  it("has an ability to talk", function() {
    assert.strictEqual(villian1.talk(),
    "You will never defeat me! I am the pope! I am Rodrigo Borgia");
  })

  it("has a weapons pouch which starts as empty", function() {
    assert.strictEqual(villian1.pouch.length, 0);
  })

  it("has an ability to add a weapon", function() {
    villian1.addWeapon(weapon1);
    assert.strictEqual(villian1.pouch.length, 1);
  })

  it("can drop a weapon out of the pouch", function() {
    villian1.addWeapon(weapon1);
    villian1.addWeapon(weapon2);
    villian1.dropWeapon(weapon1);
    assert.strictEqual(villian1.pouch.length, 1);
  })

  it("has ability to lose health when hit", function() {
    villian1.hitByWeapon(weapon1);
    assert.strictEqual(villian1.health, 40);
  })


})
