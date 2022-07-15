/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const _map = {};

    for (let i = 0; i < nums.length; i++) {
        const no = nums[i];
        let diff = target - no;
        if (diff in _map && (diff + no) === target) {
            return [_map[diff], i];
        }
        _map[no] = i;
    }
};