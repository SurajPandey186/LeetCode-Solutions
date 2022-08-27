/**
 * @param {string} digits
 * @return {string[]}
 */

var letterCombinations = function(digits) {
    if(digits.length === 0) return [];
    const _noMap = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
};
    const strArr = digits.split('').map(i => _noMap[i].split(''));
    
    const result = [];



const _recusiveCalls = (data, strArr, index) => {

    if(data.length == strArr.length) {
        result.push([...data].join(''));
        return;
    }
    
    for(let i = index; i < strArr.length; i++) {
        for(let j = 0; j < strArr[i].length; j++) {
            data.push(strArr[i][j]);
            _recusiveCalls(data, strArr, i + 1);
            data.pop();
        }
    }
};


   _recusiveCalls([], strArr, 0);
    return result;
};