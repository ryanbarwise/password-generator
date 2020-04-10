// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberBank = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 // upperCase
// var uperCase = [];
var characterBank = ["!","#","$","%","&","'","(",")","*","+",","-","]; //"./:;<=>?@[\]^_`{|}~]
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var characterLength = prompt("How many characters would you like your password to be?");
  
  while (characterLength > 128 || characterLength < 8){
     characterLength = prompt("Please enter a number that is between 8 and 128.");
  }

  var generatedPassword = "";
  var specialCharacters = confirm("Click to confirm the use of special characters.");
  var lowerCase = confirm("Click to confirm the use of lowercase letters.");
  var upperCase = confirm("Click to confirm the use of uppercase letters.");
  var useNumbers = confirm("Click to confirm the use of numbers.");

  if (specialCharacters|| lowerCase || upperCase || useNumbers ) {
  while (generatedPassword.length < characterLength) { 
var category = 0; 
if (category == 0 ){
  

}

  }
    

  }

  return generatedPassword




}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
