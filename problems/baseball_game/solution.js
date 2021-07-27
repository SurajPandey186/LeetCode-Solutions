/**
 * @param {string[]} ops
 * @return {number}
 */

const calPoints = function(ops) {
    let _count = 0;
    let _stack = [];
    
    for(let i = 0; i < ops.length; ++i) {
       console.log(_stack);
        if(Number.isInteger(+ops[i])){
            _count += +ops[i];
            _stack.push(+ops[i]);
        }else if(ops[i] === '+') {
            _count += +_stack[_stack.length - 2] + _stack[_stack.length - 1];
            _stack.push(+_stack[_stack.length - 2] + +_stack[_stack.length - 1]);
        }else if(ops[i] === 'D') {
            _count += +_stack[_stack.length - 1] * 2;
            _stack.push(+_stack[_stack.length - 1] * 2);
        }else
             _count -= _stack.pop();;
        
    }
    
    return _count;
};