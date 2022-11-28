// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
  var specialCharacters = "!#$%&()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numeric = "0987654321";
  var passwordLength = prompt("How many characters do you want your password to be?") 
  var isUppercase = confirm("Would you like to use uppercase letters?");
  var isLowercase = confirm("Would you like to use lowercase letters?");
  var isSpecial = confirm("Would you like to use special characters?");
  var isNumber = confirm("Would you like to use numbers?");

  if (passwordLength >= 8 || passwordLength >= 128 ) {
    return alert("Your password will be " + passwordLength + " " + "characters long");
  } else if (isNaN(passwordLength)) {
    passwordLength = prompt("Please Choose a valid number.");
  } else {
    return "Please choose a number between 8-128.";
  }

  // USE UPPER CASE LETTERS
  if (isUppercase) {
    alert("Uppercase letters have been selected.");
  } else {
    alert("No uppercase letters have been selected.");
  }

  // USE LOWER CASE LETTERS
  if (isLowercase) {
    alert("Lowercase letters have been selected.");
  } else {
    alert("No lowercase letters have been selected.");
  }

  // USE SPECIAL CHARACTERS
  if (isSpecial) {
    alert("Special characters have been selected.");
  } else {
    alert("No special characters have been selected.");
  }

  // USE NUMBERS
  if (isNumber) {
    alert("Numbers have been selected.");
  } else {
    alert("No numbers have been selected.");
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
