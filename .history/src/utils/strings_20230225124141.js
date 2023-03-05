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

function separateCSSUnits(input) {
  //returns array value, unit
  let matches = input.match(/^[a-z]/); //search for unit pos
  console.log("input", input);
  console.log("matches", matches);
}

module.exports = { toCamelCase, isOneOf, separateCSSUnits };
