const tail = function(data) {
  let arrayLen = data.length;
  let result = data;

  if (arrayLen > 2) {
    result = result.slice(1,arrayLen);
  }
  return result;
};
