// Assignment code here
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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

// function to create password
function generatePassword() {
  // ask for lenght of password between 8 and 128 characters
  var question = parseInt(prompt("How many characters would you like your password to have?"));

  // User interaction
  if (!question) {
    // if not character is input, do a remainder
    alert("You have to choose a number of characters!");

  } else if (question < 8 || question > 128) {
    // if character is not a valid input do a remainder
    var question = parseInt(prompt("You must choose between 8 and 128 characters"));

  } else {
    // ask validation of what kind of character will content
    var questionNumbers = confirm("Will contain numbers?");
  };

  if (!questionNumbers) {
    option = alert("Required a option criteria!");
  } else {
    option = numbers;
  }

  // array placeholder for generated length
  var passwordEl = [];

  // Random selection of variables
  for (var i = 0; i < question; i++) {
    var pickOption = option[Math.floor(Math.random() * option.length)];
    passwordEl.push(pickOption);
  }

  //convertion of the array to a string
  var password = passwordEl.join("");

  return password;
}