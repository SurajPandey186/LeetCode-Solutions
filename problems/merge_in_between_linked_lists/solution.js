/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */

var mergeInBetween = function(list1, a, b, list2) {
 
  let temp = list1; 
  let nodePosition = -1;  
  let previousNode1 = null;
  let start = null, end = null;
    
  while(temp != null) {
      ++nodePosition;
      if(nodePosition == a) {
         start = previousNode1;      
      }
      if(nodePosition == b) {
         end = temp;      
      }
      previousNode1 = temp;
      temp = temp.next;
  };
    
   let temp2 = list2;
   let previousNode2 = null;
   while(temp2 != null) {
      previousNode2 = temp2;
      temp2 = temp2.next;
   };
   
   start.next = list2;
   previousNode2.next = end.next;
   return list1; 
};  