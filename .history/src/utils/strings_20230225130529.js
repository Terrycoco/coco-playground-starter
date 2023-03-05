function toCamelCase(str) {
  return str
    .split(" ")
    .map(function (word, index) {
      // If it is the first word make sure to lowercase all the chars.
      if (index == 0) {
        return word.toLowerCase();
      }
      // If it is not the first word only upper case the first char and lowercase the rest.
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
}

function isOneOf(yourString, arrayToSearch) {
  return arrayToSearch.some((substring) => yourString.includes(substring));
}

function getValFromCSS(input) {
  //returns array value, unit
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let val = parseInt(input.substring(0, matches.index));
    return val;
  } else {
    return parseInt(input);
  }
}
function getUnitFromCSS(input) {
  //returns array value, unit
  let matches = input.match(/[a-z]/); //search for unit pos
  if (matches) {
    let unit = input.substring(0, matches.index);
    return unit;
  } else {
    return null;
  }
}

module.exports = { toCamelCase, isOneOf, separateCSSUnits };
