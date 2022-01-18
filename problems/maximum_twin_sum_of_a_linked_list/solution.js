/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

const pairSum = function(head) {
    
    let temp = head;
    const _stack = [];
    let maxTwinSum = -1;
    
    while(temp != null) {
        _stack.push(temp.val);
        temp = temp.next;
    }
    
    let i = 0;
    let j = _stack.length - 1;
    
    while(i < j) {
        let sum = _stack[i] + _stack[j];
        if(sum > maxTwinSum) {
            maxTwinSum = sum;
        }
        i++;
        j--;
    }
    
    return maxTwinSum;
};