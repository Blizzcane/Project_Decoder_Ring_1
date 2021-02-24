// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    if(!alphabet || alphabet.length !== 26 || 
      alphabet.split('').some((letter, index) => index !== alphabet.lastIndexOf(letter))) return false;
      input = input.toLowerCase();
      let abc = (encode ? "abcdefghijklmnopqrstuvwxyz" : alphabet);
      let cipher = (encode ? alphabet : "abcdefghijklmnopqrstuvwxyz");
      let output = '';
    
      for(let i=0; i<input.length;i++){
        if(input[i] === ' ') {
            output += input[i];
          } else {
            output += cipher.charAt(abc.indexOf(input[i]));
          };
        };
      return output
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
