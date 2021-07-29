/**
 * @param {string} boxes
 * @return {number[]}
 */


let minOperations = function(boxes) {
    
    const _answers = [];
    
    
    for(let i = 0; i < boxes.length; ++i) {
       
        let j = 0;
        let count = 0;
        while(j < boxes.length) {
             
            if(boxes[j] === '1') {
                count += Math.abs( i - j);
            } 
            
            j++;
        }
        
        _answers[i] = count;
    }
    
   return _answers;
};