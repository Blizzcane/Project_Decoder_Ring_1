// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false
    if (!encode) shift = shift * -1; //decides if the message should be decoded or encoded
    let solution = "";
    input = input.toLowerCase();

    for (let i = 0; i < input.length; i++) {
      let asciiNumber = input[i].charCodeAt();

      if (asciiNumber >= 97 && asciiNumber <= 122) {
        //takes care of looping back to the start or end of the alphabet
        if (asciiNumber + shift < 97) {
          shift += 26;
        } else if (asciiNumber + shift > 122) {
          shift -= 26;
        };
        
        solution += String.fromCharCode(asciiNumber + shift);
      } else {
        //this add spaces and other non-alphabetic symbols
        solution += input[i];
      };
    };
    return solution;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
