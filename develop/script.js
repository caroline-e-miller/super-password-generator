
// Assignment Code (generateBtn variable finds the first element labeled generate)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = createPassword();//generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// declare variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// create onlick event that triggers prompts(?)

function createPassword() {

    // propmts to confirm if user wants lowercase, uppercase, numeric, or special characters (if user doesn't select any, alert that they must pick at least one)
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var special = confirm("Do you want special characters?");
    var num = confirm("Do you want numbers?");

    // select length (if the input is out of the parameters, alert that the length doesn't meet qualifications)
    var length = prompt("How long do you want your password to be? Password must be between 8 and 128 characters.");
    var generatedPassword = '';
    var characterOptions = [];

    if (length < 8 || length > 128) {
        alert("Your password must be between 8 and 128 characters.");
    } else if (!upper && !lower && !special && !num) {
        alert("You need to select at least one criteria to generate a password.")
    } else {
        let randomIndex = 0;
        if (upper) {
            // upperCase[Math.floor(Math.random() * upperCase.length)]
            characterOptions = characterOptions.concat(upperCase);
        }
        if (lower) {
            characterOptions = characterOptions.concat(lowerCase);
            // lowerCase[Math.floor(Math.random() * lowerCase.length)]
        } if (special) {
            characterOptions = characterOptions.concat(specialChars);
            // specialChars[Math.floor(Math.random() * specialChars.length)]
        } if (num) {
            characterOptions = characterOptions.concat(numbers);
            // numbers[Math.floor(Math.random() * numbers.length)]
        }
        while (generatedPassword.length < length) {
            randomIndex = Math.floor(Math.random() * characterOptions.length)
            generatedPassword += characterOptions[randomIndex]
        }
    }

    // Ask user for specifications regarding uppercase, lowercase, numbers, and special characters. If none are selected, display alert


    return generatedPassword;
}

//createPassword();


// Add event listener to generate button (when user presses button, the password is written)
generateBtn.addEventListener("click", writePassword);
