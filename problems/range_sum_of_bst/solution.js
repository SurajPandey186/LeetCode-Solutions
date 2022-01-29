/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

const rangeSumBST = function(root, low, high) {
    let sum = 0;
    
    const _recursiveCalls = (node) => {
        if (node) {
            _recursiveCalls(node.left);
            if(node.val >= low && node.val <= high){
                sum += node.val;
            }
            _recursiveCalls(node.right);
        }
    }
    
    _recursiveCalls(root);
    
    return sum;
};