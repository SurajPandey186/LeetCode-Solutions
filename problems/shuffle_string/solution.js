/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function(s, indices) {
  let _newS = new Array(indices.length);

  for(let i = 0; i < indices.length; ++i) {
     _newS[indices[i]] = s[i];
  }

  return _newS.join('');
};