/**
 * @param {number[]} nums
 * @return {number}
 */

const removeDuplicates = function(nums) {
 
    for(let i = nums.length - 1; i >= 0; i--) {
        
        if(nums[i+1] === nums[i]) {
            let j = i;
            while(j < nums.length - 1) {
                nums[j] = nums[j+1];
                j++;
            }
            --nums.length;
        }
    }
    
    console.log(nums);
};