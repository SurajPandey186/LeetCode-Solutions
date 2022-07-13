/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    /*Check if last digit is less than 9 then add one in that and return*/
    if(digits[digits.length - 1] < 9) {
      digits[digits.length - 1] = ++digits[digits.length - 1] 
      return digits;  
    }
    
    let carry = 1;
    let i = digits.length - 1;
    
    while(i >= 0) {
         let sum = carry + digits[i];
        
        if(sum < 10) {
            carry = 0;
            digits[i] = sum;
            return digits;
        }
        
        digits[i] = sum % 10;
        i--;
    }

    return [1].concat(digits);
    
};