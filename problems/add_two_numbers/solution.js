function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var addTwoNumbers = function(l1, l2) {
    let t1 = l1;
    let t2 = l2;
    let carry = 0;
    let previoudRef = t3 = head  = null;
    
    while(t1 != null || t2 != null) {
        let d1 = t1 ? t1.val : 0;
        let d2 = t2 ? t2.val : 0;
        
        let sum = d1 + d2 + carry;
        carry = sum > 9 ? 1 : 0;
        
        if(head === null) {
            head = t3 = new ListNode(sum%10);
            previoudRef = head;
        }else {
            t3.next = new ListNode(sum%10);
            t3 = t3.next;
            previoudRef = t3;
        }
        
        t1 = t1?.next;
        t2 = t2?.next;
    }
    
    if(carry) {
        previoudRef.next = new ListNode(1);
    }
        
    return head;    
};