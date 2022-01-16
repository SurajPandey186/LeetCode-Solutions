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
 * @return {number[]}
 */


var postorderTraversal = function(root) {
   const _result = [];
    
    const _recursiveCalls = node => {
        if (node) {
            _recursiveCalls(node.left);
            _recursiveCalls(node.right);
            _result.push(node.val);
        }
    }
    
    _recursiveCalls(root);
    
    return _result;
};