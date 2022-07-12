/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const reverseArray = (start, end, array) => {
     while(start <= end) {
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}

var rotate = function(nums, k) {

    if (k === 0 || k === nums.length || k < 0) return nums;

    const noOfRotations = k > nums.length ? k % nums.length : k;

    let i = 0; j = nums.length - 1;
    reverseArray(0, nums.length - 1, nums);
    reverseArray(0, noOfRotations - 1, nums);
    reverseArray(noOfRotations, nums.length - 1, nums);
};