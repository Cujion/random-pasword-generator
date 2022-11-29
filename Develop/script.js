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
  var passwordOutcome = "";
  // password length check
  var passwordLength = prompt("How many characters do you want your password to be?");
  if (passwordLength < 8) {
    alert("Please choose a value greater than 8." + passwordLength);
  } else if (passwordLength > 128) {
    alert("Please choose a value less than 128.");
  } else {
    confirm("Are you sure you want to continue?");
  }
// check if you want uppercase letters in your password
  var upperCaseLetters = confirm("Do you want to have uppercase letters in your password?");
  if (upperCaseLetters === true) {
    // if yes concat pool of choices with uppercase letters for your password
    poolOfChoices += listOfUpperCase
    console.log(poolOfChoices);
  } else {
    alert("No uppercase letters selected.");
  }
// check if you want lowercase letters in your password
  var lowerCaseLetters = confirm("Do you want to have lowercase letters in your password?");
  if (lowerCaseLetters === true) {
    // if yes concat pool of choices with lowercase letters for your password
    poolOfChoices += listOfLowerCase
    console.log(poolOfChoices);
  } else {
    alert("No lowercase letters selected.");
  }
// check if you want special characters in your password
  var specialCharacters = confirm("Do you want to have special characters in your password?"); 
  if (specialCharacters === true) {
    // if yes concat pool of choices with special characters for your password
    poolOfChoices += listOfSpecialValues
    console.log(poolOfChoices);
  } else {
    alert("No special characters selected.");
  }
// check if you want numbers in your password
  var numValue = confirm("Do you want to have numbers in your password?");
  if (numValue === true) {
    // if yes concat pool of choices with numbers for your password
    poolOfChoices += listOfNum
    console.log(poolOfChoices);
  } else {
    alert("No numbers selected.");
  }
    // password randomization
  for(var i = 0; i < passwordLength; i++){
    randomizedPasswordSelector = Math.floor(Math.random() * poolOfChoices.length);
    passwordOutcome += poolOfChoices.substring(randomizedPasswordSelector, randomizedPasswordSelector +1);
  console.log(randomizedPasswordSelector);
}  
  return passwordOutcome;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
