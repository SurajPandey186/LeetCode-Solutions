/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function(head) {
   let temp = head;
   let isCyclePresent = false;
    
   if (head === null) {
       return false;
   } 
    
   if (head.val !== undefined && head.next === null) {
       return false;
   } 
    
   while(temp != null) {
       if(temp.isProcessed) {
          return true;
       }else {
          temp.isProcessed = true;
          temp = temp.next;
       }
   };
    
   return false; 
};