
// Assignment Code (generateBtn variable finds the first element labeled generate)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = createPassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}
// declare prompt variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

function createPassword() {

    // propmts to confirm if user wants lowercase, uppercase, numeric, or special characters (if user doesn't select any, alert that they must pick at least one)
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var special = confirm("Do you want special characters?");
    var num = confirm("Do you want numbers?");

    // select length (if the input is out of the parameters, alert that the length doesn't meet qualifications)
    var length = prompt("How long do you want your password to be? Password must be between 8 and 128 characters.");

    // empty password and character option string/array
    var generatedPassword = '';
    var characterOptions = [];

    if (length < 8 || length > 128) {
        alert("Your password must be between 8 and 128 characters.");
    } else if (!upper && !lower && !special && !num) {
        alert("You need to select at least one criteria to generate a password.")

        // if user inputs text, an alert appears reminding them to use numbers
    } else if (isNaN(length)) {
        alert("You must input a number for the length of your password.")

    } else {
        let randomIndex = 0;
        if (upper) {
            characterOptions = characterOptions.concat(upperCase);
        }
        if (lower) {
            characterOptions = characterOptions.concat(lowerCase);
        }
        if (special) {
            characterOptions = characterOptions.concat(specialChars);
        }
        if (num) {
            characterOptions = characterOptions.concat(numbers);
        }
        while (generatedPassword.length < length) {
            randomIndex = Math.floor(Math.random() * characterOptions.length)
            generatedPassword += characterOptions[randomIndex]
        }
    }

    return generatedPassword;
}

// Add event listener to generate button (when user presses button, the password is written)
generateBtn.addEventListener("click", writePassword);
