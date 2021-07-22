/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    
    let i = 0;
    let j = s.length - 1;
    
    const swap = (i, j) => {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    };
    
    while(i <= j) {
       swap(i, j);
       i++;
       j--; 
    }
    
    return s;
};