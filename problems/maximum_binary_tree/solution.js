
function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
*/

const constructMaximumBinaryTree = function(nums) {
    
    let head = null;
    
    const _recursiveCalls = (arr, parentRef, dir) => {
      
        if (arr.length > 0) {
            
            let max = -1;
            let maxIndex = -1;
            
            for(let i = 0; i < arr.length; i++) {
                if(arr[i] > max) {
                    max = arr[i];
                    maxIndex = i;
                }
            }
            
            
            let maxNode = new TreeNode(max);
            let leftArr = [];
            let rightArr = [];
            
            for(let i = 0; i < arr.length; i++) {
                if(maxIndex === i) {
                    continue;
                }else if( i > maxIndex) {
                    rightArr.push(arr[i])
                }else {
                    leftArr.push(arr[i])
                }
            }
            
            if (head === null) {
                head = maxNode;
            }
            
            if(dir === '_left') {
                parentRef.left = maxNode
            }
            
            if(dir === '_right') {
                parentRef.right = maxNode
            }
    
            _recursiveCalls(leftArr, maxNode, '_left');
            _recursiveCalls(rightArr, maxNode, '_right');
        }
    }
    
    _recursiveCalls(nums, null, '');
    
    return head;
};