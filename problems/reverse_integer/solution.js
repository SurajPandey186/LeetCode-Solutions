/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let resultStr = ''; 
   let noStr = x.toString();

   for(let i = noStr.length  - 1; i >= 0; i--) {
         if(noStr[i] != '-')
         resultStr += noStr[i];
         else
         resultStr = '-' + resultStr;             
   };

   let no = +resultStr;
    
   if(no > 2 ** 31 - 1 || no < -(2 ** 31)) 
       return 0;
    
   return no;
    
};