// declare variables
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "q", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// create onlick event that triggers prompts(?)

function passwordPrompts() {

    // propmts to confirm if user wants lowercase, uppercase, numeric, or special characters (if user doesn't select any, alert that they must pick at least one)
    var upper = confirm("Do you want uppercase letters?");
    var lower = confirm("Do you want lowercase letters?");
    var special = confirm("Do you want special characters?");
    var num = confirm("Do you want numbers?");

    if (upper) {
        upperCase[Math.floor(Math.random() * upperCase.length)]
    } if (lower) {
        lowerCase[Math.floor(Math.random() * lowerCase.length)]
    } if (special) {
        specialChars[Math.floor(Math.random() * specialChars.length)]
    } if (num) {
        numbers[Math.floor(Math.random() * numbers.length)]
    } else {
        alert("You need to select at least one criteria to generate a password.")
    }
}
passwordPrompts();

// select length (if the input is out of the parameters, alert that the length doesn't meet qualifications)

var length = prompt("How long do you want your password to be? Password must be between 8 and 128 characters.");

if (length < 8 || length > 128) {
    alert("Your password must be between 8 and 128 characters.");
}

// generate password if all propmts have been answered

// password appears on display

// Assignment Code (generateBtn variable finds the first element labeled generate)
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button (when user presses button, the password is written)
generateBtn.addEventListener("click", writePassword);
