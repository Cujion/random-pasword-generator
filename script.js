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
    alert("Please choose a value greater than 8.");
    // stops the function from continuing on if it does not meet the criteria
    return "";
  } else if (passwordLength > 128) {
    alert("Please choose a value less than 128.");
    // stops the function from continuing on if it does not meet the criteria
    return "";
  } else {
    var continueGen = confirm("Are you sure you want to continue?");
    // if false stops the function excursion
    if (!continueGen) return "";
  }

// check if you want uppercase letters in your password
  var upperCaseLetters = confirm("Do you want to have uppercase letters in your password?");
  if (upperCaseLetters === true) {
    // if yes concat pool of choices with uppercase letters for your password
    poolOfChoices += listOfUpperCase
  } else {
    alert("No uppercase letters selected.");
  }

// check if you want lowercase letters in your password
  var lowerCaseLetters = confirm("Do you want to have lowercase letters in your password?");
  if (lowerCaseLetters === true) {
    // if yes concat pool of choices with lowercase letters for your password
    poolOfChoices += listOfLowerCase
  } else {
    alert("No lowercase letters selected.");
  }

// check if you want special characters in your password
  var specialCharacters = confirm("Do you want to have special characters in your password?"); 
  if (specialCharacters === true) {
    // if yes concat pool of choices with special characters for your password
    poolOfChoices += listOfSpecialValues
  } else {
    alert("No special characters selected.");
  }

// check if you want numbers in your password
  var numValue = confirm("Do you want to have numbers in your password?");
  if (numValue === true) {
    // if yes concat pool of choices with numbers for your password
    poolOfChoices += listOfNum
  } else {
    alert("No numbers selected.");
  }
  
// check to see if at least one special option has been selected
  if (upperCaseLetters === false && lowerCaseLetters === false && specialCharacters === false && numValue === false) {
    alert("Please select at least one of the special criteria");
  }

    // password randomization
  for(var i = 0; i < passwordLength; i++){
    randomizedPasswordSelector = Math.floor(Math.random() * poolOfChoices.length);
    passwordOutcome += poolOfChoices.substring(randomizedPasswordSelector, randomizedPasswordSelector +1);
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