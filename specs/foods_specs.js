var assert = require('assert');
var Foods = require('../foods.js');
var Rats = require('../rats.js')

describe("Food Test", function(){

  beforeEach(function(){
    food1 = new Foods("Pizza", 20, false);
    rat1 = new Rats("Rizzo");
  })

  it("has a food name", function() {
    assert.strictEqual(food1.name, "Pizza");
  })

  it("has a replenishment value", function() {
    assert.strictEqual(food1.replenishment_value, 20);
  })

  it("has a starting point of not poisonous", function() {
    assert.strictEqual(food1.poisonous, false);
  })

  it("has the ability to become poisonous", function() {
    food1.touchFood(rat1);
    assert.strictEqual(food1.poisonous, true);
  })

})
