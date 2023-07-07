// Assignment Code
var generateBtn = document.querySelector("#generate");


var passlengthopt;
var speccharConfirm;
var passnumConfirm;
var uppercaseConfirm;
var lowercaseConfirm;
var passlength = 0;
// Special characters 
var specchar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
// Numeric characters
var passnum = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Lowercase characters
var passlett = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase letters
var passlettupper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var options;

// start function to generate password
var selpassopt = function() {
    var passlengthopt = window.prompt("Enter from 8 to 128 only.");
    if (!passlengthopt) {
        window.alert("Select valid entry!"); 
    }
    else if (passlengthopt < 8 || passlengthopt > 128) {
        passlengthopt = window.prompt("Only enter 8 to 128 characters.");
      if (passlengthopt < 8 || passlengthopt > 128) {
        selpassopt ();
      }
      
    }
        if (passlengthopt) {
        speccharConfirm = window.confirm("Would you like to use special character");
        passnumConfirm = window.confirm("Would you like to use numbers?");
        uppercaseConfirm = window.confirm("Would you like to use Uppercase letters?");
        lowercaseConfirm = window.confirm("Would you like to use Lowercase letters?");
    };

    if (!speccharConfirm && !passnumConfirm && !uppercaseConfirm && !lowercaseConfirm) {
        options = alert("Please select either: Uppercase, Lowercase, Special characters, or Numbers.");
     }
    else if (speccharConfirm && passnumConfirm && uppercaseConfirm && lowercaseConfirm) {
        options = specchar.concat(passnum, passlettupper, passlett);
    } 


    else if (speccharConfirm && passnumConfirm && uppercaseConfirm) {
        options = specchar.concat(passnum, passlettupper);
    }
    else if (speccharConfirm && passnumConfirm && lowercaseConfirm) {
        options = specchar.concat(passnum, passlett);
    }
    else if (speccharConfirm && lowercaseConfirm && uppercaseConfirm) {
        options = specchar.concat(passlett, passlettupper);
    }
    else if (passnumConfirm && lowercaseConfirm && uppercaseConfirm) {
        options = passnum.concat(passlett, passlettupper);
    }


    else if (speccharConfirm && passnumConfirm) {
        options = specchar.concat(passnum);
    }

    else if (speccharConfirm && lowercaseConfirm) {
        options = specchar.concat(passlett);
    }

    else if (speccharConfirm && uppercaseConfirm) {
        options = specchar.concat(passlettupper);
    }
    else if (passnumConfirm && lowercaseConfirm) {
        options = passnum.concat(passlett);
    }
    else if (passnumConfirm && uppercaseConfirm)
    {
        options = passnum.concat(passlettupper);
    }
    else if (lowercaseConfirm && uppercaseConfirm)
    {
        options = passlett.concat(passlettupper);
    }


    else if (uppercaseConfirm) {
        options = (passlettupper);
    }
    else if (lowercaseConfirm) {
        options = (passlett);
    } 
    else if (passnumConfirm) {
        options = (passnum);
    } 
    else if (speccharConfirm) {
        options = (specchar);
    }  


var password = [];

for(var i = 0; i < passlengthopt; i++) {
    var selectoptions = options[Math.floor(Math.random () * options.length)];
    password.push(selectoptions);
}
 var pass = password.join("");
 UserInput(pass);
 return pass;

};
function UserInput(pass) {
    document.getElementById("password").textContent = pass;
}

var passwordText = document.querySelector("#password");
generateBtn.addEventListener("click", function() {
   pass = selpassopt();
   document.getElementById("password")
});