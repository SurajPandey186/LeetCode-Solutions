/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
let countMatches = function(items, ruleKey, ruleValue) {
    let _count = 0;
    
    items.forEach(item=> {
        
        if(ruleKey === 'type' && item[0] === ruleValue)
            _count++;
        else if(ruleKey === 'color' && item[1] === ruleValue)
            _count++;
        else if(ruleKey === 'name' && item[2] === ruleValue)
            _count++;
        
    });
    
    return _count;
};