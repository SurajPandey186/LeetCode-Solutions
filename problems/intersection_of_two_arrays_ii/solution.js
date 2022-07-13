/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const map = {};
    const map2 = {};
    const intersectedList = [];
    
    nums1.forEach(no => {
        if(!(no in map)) {
            map[no] = 0;
        }
        map[no] += 1;
    });
    
    nums2.forEach(no => {
       if(no in map && map[no]) {
         intersectedList.push(no);
           map[no] -= 1;
       }
    });
    
    return intersectedList;
};