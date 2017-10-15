var assert = require('assert');
var Weapons = require('../weapons.js');

describe("Weapons Test", function(){

  beforeEach(function(){
    weapon1 = new Weapons("Hidden Blade", 60);
  })

  it("has a type", function() {
    assert.strictEqual(weapon1.type, "Hidden Blade");
  })

  it("has a hit value", function() {
    assert.strictEqual(weapon1.hit_value, 60);
  })

})
