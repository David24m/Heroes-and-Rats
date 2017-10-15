var assert = require('assert');
var Missions = require('../missions.js');

describe("Missions Test", function(){

  beforeEach(function(){
    mission1 = new Missions(5, 4, 100, false);
  })

  it("has a difficulty level", function() {
    assert.strictEqual(mission1.difficulty, 5);
  })

  it("has an urgency level", function() {
    assert.strictEqual(mission1.urgency, 4);
  })

  it("has a reward value", function() {
    assert.strictEqual(mission1.reward, 100);
  })

  it("has a start point of not completed", function() {
    assert.strictEqual(mission1.completed, false);
  })

})
