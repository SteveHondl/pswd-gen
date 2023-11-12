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
// password length restrictions
function validatePasswordLength(length) {
    
  return length >= 8 && length <= 128;
}
// user prompted to pick a length for their password, parseInt will convert
// the string and make sure it is a number

function generatePassword(){

  var passwordLength = prompt("Number of characters");
  passwordLength = parseInt(passwordLength);

  //requires user to put number in range of 8-128
  //loop will continue until user meets requirements
  while (!validatePasswordLength(passwordLength)) {

    passwordLength = prompt("Invalid number of characters");
    passwordLength = parseInt(passwordLength);
  }

  //include lowercase, uppercase, numbers, and special characters
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  if (!includeLowercase && !includeUppercase && !includeNumeric &&
      !includeSpecial) {
        alert("At least one criteria must be selected")
      }

// end of user input section

  //character choices
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:\,.<>/?";

  //Initial password
  var password = "";

  function randomChars(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }

  for (var i = 0; i < passwordLength; i++) {
    if (includeLowercase) {
      password = password + randomChars(lowercaseChars);
    }
    if (includeUppercase) {
      password = password + randomChars(uppercaseChars);
    }
    if (includeNumeric) {
      password = password + randomChars(numericChars);
    }
    if (includeSpecial) {
      password = password + randomChars(specialChars);
    }
  }
    // Displays password in the alert tab
    alert("Your generated password is: " + password);

    //Displays password on the GUI 
    return password;

  }




  
  
