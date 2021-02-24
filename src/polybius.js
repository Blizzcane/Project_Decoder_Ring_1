// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if (!encode && input.replace(/ /g, "").length % 2 !== 0) return false;
    let output = "";
    let polybiusSquare = ["aflqv", "bgmrw", "chnsx", "dioty", "ekpuz"];

    if (encode) {
      //encodes message
      input = input.toLowerCase().replace(/j/g, "i");
      for (let i = 0; i < input.length; i++) {
        //checks if current iteration is a letter or space/symbol
        if (input[i].charCodeAt() >= 97 && input[i].charCodeAt() <= 122) {
          output +=
            polybiusSquare.findIndex((column) => column.includes(input[i])) + 1;
          output +=
            polybiusSquare
              .find((column) => column.includes(input[i]))
              .indexOf(input[i]) + 1;
        } else {
          output += input[i];
        }
      }
      return output;
    } else {
      //decodes message
      for (let i = 0; i < input.length; i += 2) {
        //check for space/symbol
        if (input[i] === " ") {
          output += input[i];
          i--; //fixes the offset from the space/symbol
        } else {
          output += polybiusSquare[input[i] - 1].charAt([input[i + 1] - 1]);
        }
      }
      output = output.replace(/i/g, "(i/j)"); // fixes the i/j issue
    }
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
