const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3]), [2]);
  });

  it("returns [1, 2] for [0, 1, 2, 3]", () => {
    assert.sameOrderedMembers(middle([0, 1, 2, 3]), [1, 2]);
  });

  it("returns [] for ['5']", () => {
    assert.sameOrderedMembers(middle(['5']), []); 
  });

  it("returns [] for ['1']", () => {
    assert.sameOrderedMembers(middle(['1']), []); 
  });

  it("returns [] for [1, 2]", () => {
    assert.sameOrderedMembers(middle(['1, 2']), []); 
  });

  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.sameOrderedMembers(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 
  });
});



