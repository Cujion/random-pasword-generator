// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~"
  var alphabet = "abcdefghijklmnopqrstuvwxyz"
  var numeric = "0987654321"
  var upperLetters = letters.toUpperCase
  var isUppercase = confirm("Would you like to use uppercase letters?");
  var isLowercase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");

  if (isUppercase) {
    // USE UPPER CASE LETTERS
    console.log("uppercase");
  }

  if (isLowercase) {
    // USE LOWER CASE LETTERS
    console.log("uppercase");
  }

  if (isSpecial) {
    // USE SPECIAL CHARACTERS
    console.log("uppercase");
  }

  if (isNumber) {
    // USE NUMBERS
    console.log("uppercase");
  }

  //GRAB RANDOM LETTERS 
  console.log(choosefrom)
  return "";

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
