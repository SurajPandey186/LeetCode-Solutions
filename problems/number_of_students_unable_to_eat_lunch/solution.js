/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */


const countStudents = function(students, sandwiches) {

    let changes = 0;
    let sandWhichTop = 0;
    
    while (students.length > 0) {
        let sandWhich = sandwiches[sandWhichTop];
        
        if(sandWhich === students[0]) {
            changes = 0;
            sandWhichTop++;
            students.shift();
        }else {
            changes++;
            let elm = students.shift();
            students.push(elm);
        }
        
        if (changes === students.length) {
            break;
        }
    }
    
    return changes;
};