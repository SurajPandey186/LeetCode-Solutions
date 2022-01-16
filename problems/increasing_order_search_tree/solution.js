
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
*/

const increasingBST = function(root) {
    let head = null; temp = null;
    
    const _recursiveCalls = (node) => {
        if(node) {
            _recursiveCalls(node.left);
            if(head === null) {
                head = new TreeNode(node.val);
                temp = head;
            }else {
                temp.right = new TreeNode(node.val);
                temp = temp.right;
            }
            _recursiveCalls(node.right); 
        }
    }
   
    _recursiveCalls(root);
    return head;
};