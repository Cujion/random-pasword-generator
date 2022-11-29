// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // CODE GOES HERE
  // list of variables
  var listOfUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var listOfLowerCase = "abcdefghijklmnopqrstuvwxyz";
  var listOfSpecialValues = "!#$%&()*+,-./:;<=>?@[]^_`{|}~";
  var listOfNum = "0987654321";
  var poolOfChoices = "";
  
  var passwordLength = prompt("How many characters do you want your password to be?");
  if (passwordLength < 8) {
    alert("Please choose a value greater than 8.");
  } else if (passwordLength > 128) {
    alert("Please choose a value less than 128.");
  } else {
    confirm("Are you sure you want to continue?");
  }

  var upperCaseLetters = confirm("Do you want to have uppercase letters in your password?");
  if (upperCaseLetters === true) {
    poolOfChoices += listOfUpperCase
    console.log(poolOfChoices);
  } else {
    alert("No uppercase letters selected.");
  }

  var lowerCaseLetters = confirm("Do you want to have lowercase letters in your password?");
  if (lowerCaseLetters === true) {
    poolOfChoices += listOfLowerCase
    console.log(poolOfChoices);
  } else {
    alert("No lowercase letters selected.");
  }

  var specialCharacters = confirm("Do you want to have special characters in your password?"); 
  if (specialCharacters === true) {
    poolOfChoices += listOfSpecialValues
    console.log(poolOfChoices);
  } else {
    alert("No special characters selected.");
  }

  var numValue = confirm("Do you want to have numbers in your password?");
  if (numValue === true) {
    poolOfChoices += listOfNum
    console.log(poolOfChoices);
  } else {
    alert("No numbers selected.");
  }

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
