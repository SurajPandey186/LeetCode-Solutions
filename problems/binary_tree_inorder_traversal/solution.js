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

const inorderTraversal = function(root) {
    const _result = [];
    let head = null, temp = null;
    
    const _recursiveCalls = (node) => {
        if (node) {
            _recursiveCalls(node.left);
            _result.push(node.val);
            _recursiveCalls(node.right);
        }
    }
    _recursiveCalls(root);
    
    return _result;
};