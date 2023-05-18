
// Assignment Code

let passwordLength = 8 ;
let upperCase = ["A", "B,", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
let specialChar = ["!", "@", "#", "$", "*", "(", ")", "/", "?"];
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0",];
let charTotal = [];

var generateBtn = document.querySelector("#generate");


  
  
 
generateBtn.addEventListener("click",writePassword()) ;

// Write password to the #password input
function writePassword() {
  var pickedPrompts = userPrompt();
  var passwordText = document.querySelector("#password");

  if (pickedPrompts) {
    var password = generatePassword();


    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}




function generatePassword() {
  var newPassword = "";
  for(var i = 0; i < passwordLength; 1++) {
    var randomValue = Math.floor(Math.random() * charTotal.length);
    newPassword = newPassword + charTotal[randomValue];
  }
  return newPassword;
}

function userPrompt(){

  charTotal = [];

  passwordLength = parseInt(prompt("Please choose the length of your password. 8-128 characters"));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please try again.");
    return false;
  
  }
  if (confirm("Will your password include uppercase letters?")) {

  charTotal = charTotal + upperCase;
  } 
  if (confirm("Will your password include lowercase letters?")) {

   charTotal = charTotal + lowerCase;
  }
  if (confirm("Will your password include special characters letters?")) {

    charTotal = charTotal + specialChar;
  }
  if (confirm("Will your password include numbers?")) {

    charTotal = charTotal + numbers;
  }
  return true; 
}





