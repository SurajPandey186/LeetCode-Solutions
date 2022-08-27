/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

function findUniqueCombination(candidates, target, start, sum, result, subResult) {
    if (sum === target) result.push([...subResult]);
    for (let i = start; i< candidates.length; i++) {
        let newSum = sum + candidates[i];
        if (newSum <= target) {
            subResult.push(candidates[i]);
            findUniqueCombination(candidates, target, i+1, newSum, result, subResult);
            subResult.pop();
            while (candidates[i] === candidates[i+1]) i++;
            continue;
        }
        i = candidates.length - 1;
    }
}

var combinationSum2 = function(candidates, target) {
    const result = [];
    const subResult = [];
    findUniqueCombination(candidates.sort((a,b) => a-b), target, 0, 0, result, subResult);
    return result;
};