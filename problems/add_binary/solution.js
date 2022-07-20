/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    
    if(a === '0') {
        return b;
    }
    
    if(b === '0') {
        return a;
    }
    
    let carry = 0;
    let sumStr = '';
    let i = a.length - 1;
    let j = b.length - 1;
    
    while(i>= 0 || j >= 0) {
    
        const no_1 = a[i] != undefined ? +a[i] : 0;
        const no_2 = b[j] != undefined ? +b[j] : 0;
        
        let sum = no_1 + no_2 + carry;
        
        if(sum > 1) {
            carry = 1;
            sum = sum % 2;
        }else {
            carry = 0;
        }

        sumStr = sum + sumStr;
        
        i--;
        j--;
    }
    
    if(carry === 1) {
        sumStr = '1' + sumStr;
    }
    
    return sumStr;
    
};