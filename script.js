// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword(){
  var lowercase = "abcdefghijklmnopqrstuvwxyz"
  var numbsers = "0123456789"
  var special = "#$%&()*+,-./:;<=>?"
  var uppercase = lowercase.toUpperCase();

var input = parseInt(prompt("Chose a lenght between 8 and 128"))

if (input >=8 && input <= 128){
alert("Your password will be " + input + " characters long")
}else{
  alert("Chose a number between 8 and 128")
  return generatePassword();
}

  

//lowercase choice
var lowercaseChoice = prompt("Would you like lowercase letters? yes or no")
if(lowercaseChoice === "yes"){
  lowercaseChoice = true;
  }else if(lowercaseChoice === "no"){
    lowercaseChoice = false;
  }else{
    alert("Please choose yes or no")
    return generatePassword()
  }
//uppercase choice
var uppercaseChoice = prompt("Would you like uppercase letters? yes or no")
if(uppercaseChoice === "yes"){
  uppercaseChoice = true;
}else if(uppercaseChoice === "no"){
  uppercaseChoice = false;
}else{
  alert("Please choose yes or no")
  return generatePassword()
}

//number choice
var numberChoice = prompt("Would you like numbers? yes or no")
if(numberChoice === "yes"){
  numberChoice = true;
  }else if(numberChoice === "no"){
    numberChoice = false;
  }else{
    alert("Please choose yes or no")
    return generatePassword()
  }
// special character choice
  var specialChoice = prompt("Would you like special characters? yes or no")
if(specialChoice === "yes"){
  specialChoice = true;
}else if(specialChoice === "no"){
  specialChoice = false;
}else{
  alert("Please choose yes or no")
  return generatePassword()
}

if(lowercaseChoice === false && uppercaseChoice === false && numberChoice === false && specialChoice === false){
  alert("Please choose a character type");
  return generatePassword();

}
retVal = "";
for(var i = 0, n = input; i < input; i++ ){
retVal += lowercase.upercase.numbsers.special.charAt(Math.floor(Math.random()* n));
// retVal += uppercase.charAt(Math.floor(Math.random()* n));
// retVal += numbsers.charAt(Math.floor(Math.random()* n));
// retVal += special.charAt(Math.floor(Math.random()* n));
}
console.log(retVal)
return " "

//console.log(uppercaseChoice);
//console.log(lowercaseChoice)
//return writePassword
}



// Write password to the #password input
function writePassword() {
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page