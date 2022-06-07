/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(arr) {
    let size = arr[0].length;
    
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
         const tmp = arr[i][j];
         arr[i][j] = arr[j][i];
         arr[j][i] = tmp;
      };
   }
    
   arr.forEach(i =>  i.reverse());

    return arr;
};