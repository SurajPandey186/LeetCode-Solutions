/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const backspaceCompare = function(s, t) {
        
    const stack_1 = [];
    const stack_2 = [];

    for(let i = 0; i < s.length; i++) {
       let j = stack_1.push(s[i]) - 1;

       while(stack_1[j] == "#") {
           stack_1.pop();
           stack_1.pop();
           j--;
       }
    }

    for (let j = 0; j < t.length; j++) {
        let i = stack_2.push(t[j]) - 1;

        while(stack_2[i] == "#") {
            stack_2.pop();
            stack_2.pop();
            i--;
        }
    }

    return stack_1.join('') === stack_2.join('');
};