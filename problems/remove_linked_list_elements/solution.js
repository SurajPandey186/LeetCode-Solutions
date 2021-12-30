/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

const removeElements = function(head, val) {
    let temp = null;
    let newHead = null;
    
    if (head === null) return null;
    if (head.val === val && head.next === null) return null;
    
    
    const _recursiveCalls = node => {
        
        if (node == null) {
            return newHead;
        }
        
        if (node.val === val) {
            return _recursiveCalls(node.next);
        }else {
            if (newHead === null) {
                newHead = new ListNode(node.val);
                temp = newHead;
               return _recursiveCalls(node.next);
            }else {
                temp.next = new ListNode(node.val);
                temp = temp.next;
                return _recursiveCalls(node.next);
            }
        }
        
    } 
    
   return _recursiveCalls(head); 
};