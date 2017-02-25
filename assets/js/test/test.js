"use strict";

var assert = require('assert');
var f = require('../finder.js');


describe('test-test', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal(-1, [1,2,3].indexOf(4));
    });
  });
});

describe('highlight()', function() {
  it('should add span with colored background to a string part that matches regexp', function() {
    var str = "ab cd ef";
    var sQuery = 'cd';
    var reg = new RegExp(sQuery, 'gi');
    var color = 10;
    assert.equal(f.highlight(str, reg, sQuery, color=color+10),
                 'ab <span style="background: hsl(20, 90%, 80%)">cd</span> ef');
    assert.equal(f.highlight(str, reg, sQuery, color=color+11),
                 'ab <span style="background: hsl(31, 90%, 80%)">cd</span> ef');
  })
})