const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats( matrix ) {
  //throw new NotImplementedError('Not implemented');
  var count=0;
  matrix=matrix.flat();
  if(matrix != undefined){
  for(var i=0;i<matrix.length;i++){
    
      if(matrix[i]=='^^'){count++}
    
  }
}
  return count;
}

module.exports = {
  countCats
};
