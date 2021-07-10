// Assignment code here
var option;

// Type of characters
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
upperContainer = []; // array container of alphabet UpperCase

// convert lowerCase to UpperCase
var convertion = function (convert) {
  return convert.toUpperCase();
};

alphabetUpper = alphabet.map(convertion);

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

// function to create password
function generatePassword() {
  // ask for lenght of password between 8 and 128 characters
  var question = parseInt(prompt('How many characters would you like your password to have?'));

  // User interaction
  if (!question) {
    // if not character is input, do a remainder
    alert('You have to choose a number of characters!');

  } else if (question < 8 || question > 128) {
    // if character is not a valid input do a remainder
    question = parseInt(prompt('You must choose between 8 and 128 characters'));

  } else {
    // ask validation of what kind of character will content
    var optionNumbers = confirm('Would you like a password with numbers?');
    var optionSpecialCharacter = confirm('Would you like a password with special characters?');
    var optionLowerCase = confirm('Would you like a password with LowerCase Letters?');
    var optionUpperCase = confirm('Would you like a password with UpperCase letters?');
  };

  // if not option selected do, a reminder
  if (!optionNumbers && !optionSpecialCharacter && !optionUpperCase && !optionLowerCase) {
    option = alert('Required a option criteria!');

    // selected 4 random options
  } else if (optionNumbers && optionSpecialCharacter && optionUpperCase && optionLowerCase) {
    option = numbers.concat(specialCharacters, alphabet, alphabetUpper);

    // selected 3 random options
  } else if (optionNumbers && optionSpecialCharacter && optionUpperCase) {
    option = numbers.concat(specialCharacters, alphabetUpper);

  } else if (optionNumbers && optionSpecialCharacter && optionLowerCase) {
    option = numbers.concat(specialCharacters, alphabet);

  } else if (optionSpecialCharacter && optionLowerCase && optionUpperCase) {
    option = specialCharacters.concat(alphabet, alphabetUpper);

    // selected 2 random options
  } else if (optionNumbers && optionLowerCase && optionUpperCase) {
    option = numbers.concat(alphabet, alphabetUpper);
  } else if (optionNumbers && optionSpecialCharacter) {
    option = numbers.concat(specialCharacters);
  } else if (optionSpecialCharacter && optionLowerCase) {
    option = specialCharacters.concat(alphabet);
  } else if (optionSpecialCharacter && optionUpperCase) {
    option = specialCharacters.concat(alphabetUpper);
  } else if (optionNumbers && optionLowerCase) {
    option = numbers.concat(alphabet);
  } else if (optionLowerCase && optionUpperCase) {
    option = alphabet.concat(alphabetUpper);
  } else if (optionNumbers && optionUpperCase) {
    option = numbers.concat(alphabetUpper);

    // selected 1 random option
  } else if (optionNumbers) {
    option = numbers;
  } else if (optionSpecialCharacter) {
    option = specialCharacters;
  } else if (optionLowerCase) {
    option = alphabet;
  } else if (optionUpperCase) {
    option = upperContainer.concat(alphabetUpper);
  };

  // array placeholder for generated length
  var passwordEl = [];

  // Random selection of variables
  for (var i = 0; i < question; i++) {
    var pickOption = option[Math.floor(Math.random() * option.length)];
    passwordEl.push(pickOption);
  }

  //convertion of the array to a string
  password = passwordEl.join('');

  return password;
}