const { NotImplementedError } = require('../extensions/index.js');

class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;
    
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        const subDepth = this.calculateDepth(arr[i]) + 1;
        depth = Math.max(depth, subDepth);
      }
    }
    
    return depth;
  }
}
module.exports = {
  DepthCalculator
};
