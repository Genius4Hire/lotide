const assertEqual = require('./assertEqual');

const head = function(data) {
  if (data !== undefined) {
    return data[0];
  }
};

module.exports = head;