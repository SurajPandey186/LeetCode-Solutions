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
 * @param {number} val
 * @return {TreeNode}
 */


const searchBST = function(root, val) {
    let head = null;
    
    const _recursiveCalls = (node) => {
        if (node) {
            _recursiveCalls(node.left);
            if(node.val === val){
                head = node;
            }
            _recursiveCalls(node.right);
        }
    }
    
    _recursiveCalls(root);
    
    return head;
};