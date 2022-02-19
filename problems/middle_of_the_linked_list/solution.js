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

const middleNode = function(head) {
   
    let i = 0;
    let temp = head;
    const _keyMap = {};
    
    while(temp != null) {
        i++;
        _keyMap[i] = temp;
        temp = temp.next;
    }
    
    const mid = i / 2;
    const _mid = Number.isInteger(mid) ? (mid) + 1 : Math.ceil(mid);
    
    return _keyMap[_mid];
};