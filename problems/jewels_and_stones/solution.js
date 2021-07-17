/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let _count = 0;
  let _keyMap = {};

  for (let i = 0; i < stones.length; ++i) {
    if (!_keyMap[stones[i]]) _keyMap[stones[i]] = 0;

    _keyMap[stones[i]] += 1;
  }

  for (let i = 0; i < jewels.length; ++i) {
    if (_keyMap[jewels[i]]) _count += _keyMap[jewels[i]];
  }

  return _count;
    
};