function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}

const mergeTwoLists = function(list1, list2) {
  let head = null; 
  let temp = null;
    
  if (list1 === null && list2 != null) return list2;
  if (list1 != null && list2 === null) return list1;
  if (list1 === null && list2 === null) return null;
    
  const _createHeadNode = (val) => {
      head =  new ListNode(val); 
      temp = head;
  }  
    
  const _recursiveCalls = (temp1, temp2) => {

    if(temp1 === null) {
        while(temp2 != null) {
            temp.next = new ListNode(temp2.val);
            temp = temp.next;
            temp2 = temp2.next;
        }
        
        return;
    }
    
    if(temp2 === null) {
        while(temp1 != null) {
            temp.next = new ListNode(temp1.val);
            temp = temp.next;
            temp1 = temp1.next;
        }
        
        return;
    }      
      
      
    if (temp1.val <= temp2.val) {
        if (head === null) {
            _createHeadNode(temp1.val);
            _recursiveCalls(temp1.next, temp2);
        } else {
            temp.next = new ListNode(temp1.val);
            temp = temp.next;
            _recursiveCalls(temp1.next, temp2);
        }
    } else if (temp1.val > temp2.val) {
        if (head === null) {
            _createHeadNode(temp2.val);
            _recursiveCalls(temp1, temp2.next);
        } else {
            temp.next = new ListNode(temp2.val);
            temp = temp.next;
            _recursiveCalls(temp1, temp2.next);
        }
    }
  };
    
  _recursiveCalls(list1, list2); 
  return head;  
};