/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const deleteDuplicates = function(head) {
     if (head === null) return null;
    
     if (head.val !== undefined && head.next === null) return head;
    
     let temp = head;
     let previous = null;
    
     while(temp != null) {
         if(previous && previous.val === temp.val) {
             previous.next = temp.next;
         }else {
             previous = temp;
         }
         
         temp = temp.next;
     }
    
    return head;
};