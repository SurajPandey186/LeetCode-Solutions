/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

const isPalindrome = function(head) {
   if (head.next === null && typeof head.val == "number") 
       return true;  
    
   let _temp = head;
   let _response = ''; 
   while(_temp != null) {
     _response += _temp.val;  
     _temp = _temp.next;
   }
    
    return _response === [..._response].reverse().join('');
};