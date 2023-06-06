const tail = function(data) {
  let result = data;
  if (data.length > 2) {
    result = result.slice(1, data.length);
  }
  return result;
};

module.exports = tail;