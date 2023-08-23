// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePassword() {
var passwordLength = prompt("Enter password length (between 8 and 128):");
if (passwordLength === null) {
  return;
}
// User clicks on "cancel" or closes the promp
passwordLength = parseInt(passwordLength);
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
alert("Invalid password length. Please enter a value between 8 and 128.");
return;
}