
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        int lenA = length(headA);
        int lenB = length(headB);
        while(lenA > lenB){
            headA = headA.next;
            lenA--;      
        }
        while(lenB > lenA){
            headB = headB.next;
            lenB--;
        }
        while(headA != headB){
            headA = headA.next;
            headB = headB.next;
        }
        return headA;
    }
    private int length(ListNode node){
        int length = 0;
        while(node != null){
            node = node.next;
            length++;
        }
        return length;
    }
}