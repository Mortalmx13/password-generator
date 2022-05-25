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

  
var numOfTrues = 0;
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
//if they do not agree to nay of the characters
if(lowercaseChoice === false && uppercaseChoice === false && numberChoice === false && specialChoice === false){
  alert("Please choose a character type");
  return generatePassword();

}
//sets up the random leters and numbers
val = "";
for( count = 0; count < input; ){
  if(lowercaseChoice=== true){
    
    val += lowercase.charAt(Math.floor(Math.random()* lowercase.length));
    count++;
  }
  if(uppercaseChoice === true){
    if(count < input){
      val += uppercase.charAt(Math.floor(Math.random()* uppercase.length));
    count++;
    }
    
  }
  if(numberChoice === true){
    if(count < input){
      val += numbsers.charAt(Math.floor(Math.random()* numbsers.length));
    count++;
    }
    
  }
  if(specialChoice === true){
    if(count < input){
      val += special.charAt(Math.floor(Math.random()* special.length));
      count++;
    }
   
  }

}
//sends the pasword into the box
return val

}

// Write password to the #password input
function writePassword() {
  


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
