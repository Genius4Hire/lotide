const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.sameOrderedMembers(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['Labs', 101] for ['Lighthouse', 'Labs', 101]", () => {
    assert.sameOrderedMembers(tail(['Lighthouse', 'Labs', 101]), ['Labs', 101]);
  });

  it("returns ['5'] for ['5']", () => {
    assert.sameOrderedMembers(tail(['5']), ['5']); 
  });


});


