/**
 * @param {number[]} prices
 * @return {number[]}
 */

const finalPrices = function(prices) {
    const _stack = [];
    const _result = [];

    for (let i = prices.length - 1; i >= 0; i--) {
        let top = _stack.length - 1;
        if (_stack.length === 0) _result.push(prices[i]);
        else if (_stack.length != 0 && _stack[top] <= prices[i]) {
            _result.push(prices[i] - _stack[top]);
        }
        else if (_stack.length != 0 && _stack[top] > prices[i]) {
            let j = top;
            while (_stack[j--] > prices[i] && _stack.length != 0) {
                _stack.pop();
            }
            if (_stack.length === 0) _result.push(prices[i]);
            else _result.push(prices[i] - _stack[_stack.length - 1]);
        }
        _stack.push(prices[i]);
    }

    return _result.reverse();
};