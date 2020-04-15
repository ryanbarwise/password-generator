// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberBank = [0,1,2,3,4,5,6,7,8,9];
var lowerCaseBank = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCaseBank = ["A","B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
var characterBank = ["!",'"',"#","$","%","&","'","(",",",")","*","+","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~","U+005C"];


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

  if (specialCharacters || lowerCase || upperCase || useNumbers ) {
  while (generatedPassword.length < characterLength) { 
    
  
   
    var characterType = ["specialCharacters", "lowerCase", "upperCase", "numbers"];
    var category = characterType[Math.floor(Math.random() * 4)];

    if (category === "numbers" && useNumbers) {
      generatedPassword += numberBank[Math.floor(Math.random() * numberBank.length)];


    } else if (category === 'lowerCase' && lowerCase) {
        generatedPassword += lowerCaseBank[Math.floor(Math.random()* lowerCaseBank.length)];
      
    
    } else if (category === 'upperCase' && upperCase) {
        generatedPassword += upperCaseBank[Math.floor(Math.random() * upperCaseBank.length)];
      
        
    
    } else if (category === 'specialCharacters' && specialCharacters) {
        generatedPassword += characterBank[Math.floor(Math.random() * characterBank.length)];
        
      }
    }
  }


   return generatedPassword;
}
        
  
    

    


 









// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
