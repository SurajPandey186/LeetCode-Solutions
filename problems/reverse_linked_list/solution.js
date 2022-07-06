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
var reverseList = function(head) {
       if(head == null || head.next == null) return head;

        let prev = null;
        let temp = head;
  
        while (temp != null) {
            let node = temp;
            temp = temp.next;
            node.next = prev;
            prev = node;
            
        }
             
        head = prev;

        return head;
};