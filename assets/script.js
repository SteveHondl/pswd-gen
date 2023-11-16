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

  //My code
  //password length restrictions
  //length is the parameter
  function validatePasswordLength(length) {
     return length >= 8 && length <= 128;
  }

  //function is created with the parameter being characters
  //Math.random will select a random decimal between 0 and 1
  //the decimal is then multiplied by the total number of characters in the string
  //Math.floor will round that number to nearest whole number
  function randomChars(characters) {
   return characters.charAt(Math.floor(Math.random() * characters.length));
  }

  function generatePassword(){
  
  //user prompted to selected number of characters
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

  //if none of the four variables are selected, the user will be alerted they must select at least one criteria
  if (!includeLowercase && !includeUppercase && !includeNumeric &&
      !includeSpecial) {
        alert("At least one criteria must be selected")
      }

  //end of user inputs

  //variables declared with appropriate characters for each criteria
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "0123456789";
  var specialChars = "!@#$%^&*()-_=+[]{}|;:\,.<>/?";

  //variables created and initialized with an empty string
  var password = "";
  
  var characterTypes = "";
  
  //depending on previous user inputs, characters will be selected from at least one of the four criteria
  if (includeLowercase) characterTypes = characterTypes + lowercaseChars;
  if (includeUppercase) characterTypes = characterTypes + uppercaseChars;
  if (includeNumeric) characterTypes = characterTypes + numericChars;
  if (includeSpecial) characterTypes = characterTypes + specialChars;

  //Loop to generate the password, passwordLength will determine the number of loops
  for (var i = 0; i < passwordLength; i++) {
  //function randomChars will now help to randomly pick characters based what the user has selected
  var randomCharacters = randomChars(characterTypes);

  // Add the randomly selected character to the password
  password = password + randomCharacters;
  }
  //password generated 
  return password

  }





  
  
