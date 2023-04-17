const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
/*function createDreamTeam( members ) {
  //throw new NotImplementedError('Not implemented');
  var newArr='';
  var Arr='';
  for(var i=0;i<members.length;i++){
    if(typeof members[i]==="string"){
      newArr+=members[i];
      Arr+=members[i].substr(1, 1)
    }
  }

}*/


function sortAndReverse(string, reverse = false) {
  const compare = (new Intl.Collator('en')).compare
return string.split('')
  .sort((a, b) => ((reverse ? -1 : 1) * compare(a, b)))
  .join('')
}


function createDreamTeam( members ) {
//throw new NotImplementedError('Not implemented');

//if(typeof members =="string")return false

var newArr='';
var Arr='';
for(var i=0;i<members.length;i++){
  if(typeof members[i]==="string"){
      
      members[i]=members[i].trim();
     
    newArr+=members[i];
    Arr+=members[i].substr(0, 1)
   
  }
}
Arr=Arr.toUpperCase();
Arr=sortAndReverse(Arr)

return Arr
}

module.exports = {
  createDreamTeam
};
