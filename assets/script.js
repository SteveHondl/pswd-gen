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
//length is the parameter
  function validatePasswordLength(length) {
    
  return length >= 8 && length <= 128;
}
//variable is declared
// user prompted to pick a length for their password
  function generatePassword(){

  var passwordLength = prompt("Number of characters?");

  //user required to pick a number of characters within the set parameter
  //loop will continue until user is the in parameter
  while (!validatePasswordLength(passwordLength)) {

    passwordLength = prompt("Invalid number of characters");

  }

  //variables declared
  //user is asked if they want to include each variable
  var includeLowercase = confirm("Include lowercase letters?");
  var includeUppercase = confirm("Include uppercase letters?");
  var includeNumeric = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  //if none of the four variables are selected, the user will be alerted they must select at least one
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

  //variable password is created and initialized with an empty string
  var password = "";

  //function declared with characters being the parameter
  //
  function randomChars(characters) {
    return characters.charAt(Math.floor(Math.random() * characters.length));
  }
  
  //this loop will take the length of characters the user has input,
  //it will select random characters from the variables the user has chosen.
  
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

    //Displays password on the GUI 
    return password;

  }




  
  
