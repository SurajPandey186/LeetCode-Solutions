/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */

let arrayStringsAreEqual = function(word1, word2) {
  let sentence_1 = "";
  let sentence_2 = "";

  let _greater = word1.length > word2.length ? word1 : word2;

  for (let i = 0; i < _greater.length; ++i) {

    if (word1[i]) sentence_1 += word1[i];

    if (word2[i]) sentence_2 += word2[i];
  }
  
  return sentence_1 == sentence_2;
};