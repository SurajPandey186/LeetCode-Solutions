
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const reverseList = function(head) {
    let temp = null;
    let string = '';
    let newHead = null;
    
    if(head === null) return null; 
    
    const recursiveCalls = (node) => {
        
        if (node.next) 
            recursiveCalls(node.next);
        
        if (newHead === null) {
            newHead = new ListNode(node.val);
            temp = newHead;
        }else {
            temp.next = new ListNode(node.val);
            temp = temp.next;
        }       
    }
    
    recursiveCalls(head);
    
    return newHead;
};