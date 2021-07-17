/**
 * @param {string} address
 * @return {string}
 */


let defangIPaddr = function(address) {
      
  let _temp = '';
  
  for(let i = 0; i < address.length; ++i) {
      
      if(address[i] === '.') {
         _temp += '[.]';
         continue;
      }
      
      _temp += address[i]; 
  }
  
  return _temp;
};