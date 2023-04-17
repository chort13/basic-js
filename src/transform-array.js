const { NotImplementedError } = require('../extensions/index.js');

function transform(arr) {
  if (!Array.isArray(arr)) {
    return  "'arr' parameter must be an instance of the Array!";
  }
  
  const transformedArr = [];
  let discardNext = false;
  
  for (let i = 0; i < arr.length; i++) {
    if (discardNext) {
      discardNext = false;
      continue;
    }
    
    if (arr[i] === '--discard-next') {
      discardNext = true;
      continue;
    }
    
    if (arr[i] === '--discard-prev') {
      if (transformedArr.length > 0) {
        transformedArr.pop();
      }
      continue;
    }
    
    if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformedArr.push(arr[i + 1]);
      }
      continue;
    }
    
    if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 1] !== undefined) {
        transformedArr.push(arr[i - 1]);
      }
      continue;
    }
    
    transformedArr.push(arr[i]);
  }
  
  return transformedArr;
}

module.exports = {
  transform
};
