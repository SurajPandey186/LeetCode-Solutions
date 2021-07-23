/**
 * @param {number[]} nums
 * @return {number}
 */

let thirdMax = function(nums) {
    
   
    let _unique = [...new Set(nums)].sort((a, b) => b - a);
    
    if(_unique.length < 3) {
        if( _unique[1])
         return _unique[0] > _unique[1] ? _unique[0]: _unique[1];
        else
        return _unique[0]
    }
    
    return _unique[2];
};