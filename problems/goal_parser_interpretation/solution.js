/**
 * @param {string} command
 * @return {string}
 */

const _stringsMap = {
  G: "G",
  "()": "o",
  "(al)": "al",
};


let interpret = function(command) {
  let _temp = "";
  let _newString = "";

  for (let i = 0; i < command.length; ++i) {
    _temp += command[i];

    if (_stringsMap[_temp]) {
      _newString += _stringsMap[_temp];
      _temp = '';
    }
  }

  return _newString;
};