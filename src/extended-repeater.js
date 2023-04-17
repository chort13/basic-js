const { NotImplementedError } = require('../extensions/index.js');


function repeater(str, options) {
  
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const addition = options.addition !== undefined ? String(options.addition) : '';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  var repeatedAddition =null;
  
  
  
  if(additionRepeatTimes > 1){
    repeatedAddition =Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  }
  else{
    repeatedAddition =addition;
  }



  const repeatedStr = Array(repeatTimes).fill(String(str) + repeatedAddition).join(separator);
  
  return repeatedStr;
}

module.exports = {
  repeater
};
