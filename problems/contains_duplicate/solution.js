/**
 * @param {number[]} nums
 * @return {boolean}
 */


var containsDuplicate = function(nums) {
    const _map = {};
    let result = false;
   
    for(let i = 0; i < nums.length; i++) {
         const no = nums[i];
         _map[no] = _map[no] ? _map[no] + 1 : 1;
         if(_map[no] > 1) {
             result = true;
         };
    }
    
    return result;
};