/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 0;
    let majorityElement = 0;
    
    nums.forEach(no => {
        if(count === 0) {
            majorityElement = no;
        }
        if(no === majorityElement) 
            count++;
        else 
            count--;
    });
    
    return majorityElement;
};