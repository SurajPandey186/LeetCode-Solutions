/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
    int carry = 0;
    ListNode t1 = l1;
    ListNode t2 = l2;
    ListNode t3 = null;
    ListNode head = null;
    ListNode previoudRef = null;
    
    while(t1 != null || t2 != null) {
        int d1 = t1 != null ? t1.val : 0;
        int d2 = t2 != null ? t2.val : 0;
        
        int sum = d1 + d2 + carry;
        carry = sum > 9 ? 1 : 0;
        
        if(head == null) {
            head = new ListNode(sum%10);
            t3 = head;
            previoudRef = head;
        }else {
            t3.next = new ListNode(sum%10);
            t3 = t3.next;
            previoudRef = t3;
        }
          if(t1 != null) {
           t1 = t1.next;
          }
          if(t2 != null) {
            t2 = t2.next;
          }
        
    }
    
    if(carry > 0) {
        previoudRef.next = new ListNode(1);
    }
        
    return head;  
    }
}