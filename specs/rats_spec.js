var assert = require('assert');
var Rats = require('../rats.js');

describe("Rats Test", function(){

  beforeEach(function(){
    rat1 = new Rats("Rizzo");
  })

  it("has a name", function() {
    assert.strictEqual(rat1.name, "Rizzo");
  })

})
