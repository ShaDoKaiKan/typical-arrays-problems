
exports.min = function min (array) {
    let min = 0;
    if (!array) {
      return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            min = array[i] < min ? array[i] : min;
        }
  
    }
  return min;
}

exports.max = function max (array) {
  let max = 0;
    if (!array) {
      return 0;
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            max = array[i] > max ? array[i] : max;
        }
  
    }
  return max;
}

exports.avg = function avg (array) {
  let sum = 0;
  if (!array || array.length === 0) {
    return 0;
  }
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let res = sum / array.length;
  return res;
  
}
