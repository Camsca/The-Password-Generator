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
console.log("Password length input:", passwordLength);
if (passwordLength === null) {
  return;
}
// User clicks on "cancel" or closes the promp
passwordLength = parseInt(passwordLength);
console.log("Parsed password length:", passwordLength);
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
console.log("User preferences: lowercase =", includeLowercase, "uppercase =", includeUppercase, "numeric =", includeNumeric, "special =", includeSpecial);

var charset = "";
if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if (includeNumeric) charset += "0123456789";
if (includeSpecial) charset += "!@#$%^&*()";

console.log("Generated charset:", charset);//console logs to check 

var password = generateRandomPassword(passwordLength, charset);  
console.log("Generated password:", password); 

return password;
}
//generate funtion  is called and based on the user characters preference 
function generateRandomPassword(length, charset) {
var password = "";
for (var i = 0; i < length; i++) {
var randomIndex = Math.floor(Math.random() * charset.length);
password += charset.charAt(randomIndex);
}
return password;
}
//this loops "length " and grabs a random charcter form the character set