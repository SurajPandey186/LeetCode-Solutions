/**
 * @param {string} s
 * @return {number}
 */

let balancedStringSplit = function(s) {
    let _count = 0;
    let _tempStack = [];
    let rCount = 0, lCount = 0;
    
    
    for(let i = 0; i < s.length; ++i) {
       _tempStack.push(s[i]);
        
        if(s[i]=== 'R') rCount++;
       else lCount++;
        
        if(_tempStack.length % 2  == 0) {
            
            if(rCount === lCount) {
                _count += 1; 
                lCount = 0;
                rCount = 0;
               _tempStack = [];
            }
        }
    }
                                
    return _count;                                   
};