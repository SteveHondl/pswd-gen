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

// My code

function validatePasswordLength(length) {
    
  return length >= 8 && length <= 128;
}

function generatePassword(){

  var passwordLength = prompt("Number of characters")
  passwordLength = parseInt(passwordLength)

  while (!validatePasswordLength(passwordLength)) {

    passwordLength = prompt("Invalid number of characters")
    passwordLength = parseInt(passwordLength)
  }
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?")

  if (!includeLowercase && !includeUppercase && !includeNumeric &&
      !includeSpecial) {
        alert("At least one criteria must be selected")
      }



}