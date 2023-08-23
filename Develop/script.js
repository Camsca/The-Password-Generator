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
//Askes the user ?? to confirm to selct at least one character
var includeLowercase=confirm("includeLowercase?");
var includeUppercase= confirm ('Inlude uppercase characters?');
var includeNumeric = confirm("Include numeric characters?");
var includeSpecial= confirm("Include splecia characters?");
 //if none above are selcted they desplay the message and returns
if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial){
  alert("You must select at least one Character type");
  return;
}

var charset = "";
if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (includeNumeric) charset += "0123456789";
if (includeSpecial) charset += "!@#$%^&*()";
var password = generateRandomPassword(passwordLength, charset);  
var passwordText = document.querySelector("#password");
passwordText.value = password;
}
//generate funtion  is called and based on the user characters preference 