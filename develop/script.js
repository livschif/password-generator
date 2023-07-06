// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


//function writePassword() {
   //var password = generatePassword();
   //var passwordText = document.querySelector("#password");

 //passwordText.value = password;

 //}

// Add event listener to generate button
var speccharConfirm;
var passnumConfirm;
var uppercaseConfirm;
var lowercaseConfirm;
var passlength = 0;
// Special characters 
var specchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var passnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
var passlett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
var upperspace = [];

var options;

var toUpper = function(o) {
    return o.toUpperCase();
}

var passlettupper = passlett.map(toUpper);
// start function to generate password
var selpassopt = function() {
    var passlengthopt = window.prompt("Enter from 8 to 128 only.");
    if (!passlengthopt) {
        window.alert("Select valid entry!"); 
    }
    else if (passlengthopt <= 8 && passlengthopt >= 128) {
        passlengthopt = window.prompt("Only enter 8 to 128 characters.");
      //passlength = passlengthopt;
      //return;
      //redo order 
    } else {
        speccharConfirm = window.confirm("Would you like to use special character");
        passnumConfirm = window.confirm("Would you like to use numbers?");
        uppercaseConfirm = window.confirm("Would you like to use Uppercase letters?");
        lowercaseConfirm = window.confirm("Would you like to use Lowercase letters?");
    };

    if (!speccharConfirm && !passnumConfirm && !uppercaseConfirm && !lowercaseConfirm) {
        choices = alert("Please select either: Uppercase, Lowercase, Special characters, or Numbers.");
     }
    else if (speccharConfirm && passnumConfirm && uppercaseConfirm && lowercaseConfirm) {
        choices = specchar.concat(passnum, passlettupper, passlett);
    } 


    else if (speccharConfirm && passnumConfirm && uppercaseConfirm) {
        choices = specchar.concat(passnum, passlettupper);
        //alert("your not selecting lowercase")
    }
    else if (speccharConfirm && passnumConfirm && lowercaseConfirm) {
        choices = specchar.concat(passnum, passlett);
       // alert("your not selecting uppercase")
    }
    else if (speccharConfirm && lowercaseConfirm && uppercaseConfirm) {
        choices = specchar.concat(passlett, passlettupper);
        //alert("your momma is a number")
    }
    else if (passnumConfirm && lowercaseConfirm && uppercaseConfirm) {
        choices = passnum.concat(passlett, passlettupper);
        //alert("alert" + choices)
    }
    else if (speccharConfirm && passnumConfirm) {
        choices = specchar.concat(passnum);
    }

    else if (speccharConfirm && lowercaseConfirm) {
        choices = specchar.concat(passlett);
    }

    else if (speccharConfirm && uppercaseConfirm) {
        choices = specchar.concat(passlettupper);
    }
    else if (passnumConfirm && lowercaseConfirm) {
        choices = passnum.concat(passlett);
    }
    else if (passnumConfirm && uppercaseConfirm)
    {
        choices = passnum.concat(passlettupper);
    }
    else if (lowercaseConfirm && uppercaseConfirm)
    {
        choices = passlett.concat(passlettupper);
    }
}
generateBtn.addEventListener("click", selpassopt);