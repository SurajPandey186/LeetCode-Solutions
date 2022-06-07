/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let mapUnique = new Map();
    
    for(let i = 0; i < s.length; ++i) {
        if(!mapUnique.has(s[i])) {
            mapUnique.set(s[i], {
               val: 0,
               index: i 
            });
        }
        let ob = mapUnique.get(s[i]);
        ob.val += 1;
        mapUnique.set(s[i], ob);
    };
    
    let values = mapUnique.values();
    
    for (let ob of values) {
        if(ob.val == 1) return ob.index;
    }

    return -1;
};