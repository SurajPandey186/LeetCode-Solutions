function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
var mergeNodes = function(head) {
    
    if(head === null || head.next === null) return null;
  
    let sum = 0;
    let iter = null;
    let newList = null;
    let temp = head.next;
    
    while(temp != null) {
        let val = temp.val;
        if(val === 0) {
            if(newList === null) {
                newList = new ListNode(sum);
                iter = newList;
            }else {
                iter.next = new ListNode(sum);
                iter = iter.next;
            }  
            sum = 0;
        }else 
            sum += val;
        temp = temp.next; 
    }
    return newList;
};