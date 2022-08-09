/**
 * @param {number} n
 * @return {number}
 */
var temp = {};
var climbStairs = function(n) {
   let data = [1, 2];
    
   if(n===1) return 1;
   if(n===2) return 2; 
    
   for(let i = 3; i <= n; i++) {
       data[i-1] = data[i-2] + data[i-3]; 
   }
    
   return data[data.length-1]; 
};