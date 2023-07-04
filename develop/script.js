// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


// function writePassword() {
   //var password = generatePassword();
  // var passwordText = document.querySelector("#password");

 // passwordText.value = password;

 //}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

var passlength = 0;
var selpassopt = function() {
    var passlengthopt = window.prompt("Enter from 8 to 128 only.");
    if (passlengthopt >= 8 && passlengthopt <= 128) {
      passlength = passlengthopt;
      //return;
    } else
    window.alert("Select valid entry");

    selpassopt();
    }



generateBtn.addEventListener("click", selpassopt);