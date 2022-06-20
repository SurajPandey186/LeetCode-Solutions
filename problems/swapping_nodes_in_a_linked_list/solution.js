/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

var swapNodes = function(head, k) {
    let temp = head;
    let tempArr = [];
    
    while(temp != null) {
        tempArr.push(temp);
        temp = temp.next;
    }
    
    let data = tempArr[k-1].val;
    tempArr[k-1].val = tempArr[tempArr.length - 1 - (k-1)].val;
    tempArr[tempArr.length - 1 - (k-1)].val = data;
    
    return head;
    
};