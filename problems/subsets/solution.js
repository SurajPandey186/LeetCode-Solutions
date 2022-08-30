/**
 * @param {number[]} nums
 * @return {number[][]}
 */


const subsets = function(nums) {
  const result = [];

  const generate = (subset = [], depth, nums) => {
    if(depth === nums.length) {
        result.push([...subset]);
        return;
    }
    
    generate(subset, depth + 1, nums);
    subset.push(nums[depth]);
    generate(subset, depth + 1, nums);
    subset.pop();
  }
  generate([], 0, nums);
  return result; 
};