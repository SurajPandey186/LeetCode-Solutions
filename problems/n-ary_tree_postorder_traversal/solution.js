/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

const postorder = function(root) {
    if (root === null) return [];
    
    if (root.val != undefined && root.children.length == 0) return [root.val];
    
    const _result = [];
    let _stack = [root];
    
    while(_stack.length > 0) {
        let top = _stack.length - 1;
        if(_stack[top].children.length > 0 && !_stack[top].process) {
            _stack[top].process = true;
            _stack = _stack.concat(_stack[top].children.reverse());
        }else {
            let ob = _stack.pop();
            _result.push(ob.val);
        }  
    }

    return _result;
};