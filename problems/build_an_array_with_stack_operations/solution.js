/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */

const buildArray = function(target, n) {
    const _output = [];
    let _processedKey = 1;

    for (let i = 0; i < target.length; i++) {
    
        if(target[i] == _processedKey) {
            _output.push('Push');
            _processedKey++;
        }
        else {
            while(_processedKey != target[i]) {
                _output.push('Push', 'Pop');
                _processedKey++;
            }
            _output.push('Push');
            _processedKey++;
        }
    }
    
    return _output;
};