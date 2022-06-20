/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public void deleteNode(ListNode node) {
        ListNode temp = node;
        ListNode prevRef = null;
        
        while(temp.next != null) {
            prevRef = temp;
            temp.val = temp.next.val;
            temp = temp.next;
        }
        
        prevRef.next = null;        
    }
}