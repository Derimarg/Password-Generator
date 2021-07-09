// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function to write password
function generatePassword() {
  // ask for lenght of password between 8 and 128 characters
  var question = parseInt(prompt("How many characters would you like your password?"));

  // User interaction
  if (!question) {
    // if not character is input, do a remainder
    alert("You have to choose a number of characters!");

  } else {
    if (question < 8 || question > 128) 
    // if character if input do a remainder
    var question = parseInt(prompt("You must choose between 8 and 128 characters"));
  };

  // array placeholder for generated length
  var passwordEl = [];

  var password = passwordEl.join("");
  UserInput(password);
  return password;
}

function UserInput(password) {
  document.getElementById("#password").textContent = password;
}