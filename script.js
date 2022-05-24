// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var numbsers = "0123456789"
  var special = "#$%&()*+,-./:;<=>?"
  var uppercase = lowercase.toUpperCase();

var input = parseInt(prompt("Chose a lenght between 8 and 128"))

if (input >=8 && input <= 128){

}else{
  alert("Chose a number between 8 and 128")
}

  return "";
}


// Write password to the #password input
function writePassword() {
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
