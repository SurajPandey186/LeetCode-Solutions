/**
 * @param {string[]} logs
 * @return {number}
 */

const minOperations = function(logs) {
    const _stack = [];
    
    let i = 0;
    
    while(i < logs.length) {
        if(logs[i] === './') {
            i++;
            continue;
        }else if (logs[i] === '../') {
            _stack.pop();
        }else {
            _stack.push(logs[i]);
        }
        i++;
    }
    
    return _stack.length;
};