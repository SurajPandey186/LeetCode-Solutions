/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {

    
    
    if(numRows === 1) {
        return [[1]];
    }
    
    if(numRows === 2) {
        return [[1], [1, 1]];
    }
    
    const op = [[1], [1, 1]];
    
    for(let i = 2; i < numRows; i++) {
        const tempArr = new Array(i+1);
        tempArr[0] = 1;
        tempArr[tempArr.length - 1] = 1;
        
        let j = 1;
        while(tempArr[j] != 1) {
            tempArr[j]= op[i-1][j-1] + op[i-1][j];
            j++;
        }
        
        op.push(tempArr);
    };
    
    return op;
};