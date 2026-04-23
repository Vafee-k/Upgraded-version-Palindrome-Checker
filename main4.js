// Waiting until the page fully loads
window.onload = function () {

    // Getting the form from the page
    var form = document.getElementById("palindromeForm");

    // Using onsubmit instead of addEventListener
    form.onsubmit = handleSubmit;
};

// Creating a class for the palindrome result
class PalindromeResult {

    // Setting up the class
    constructor(originalText, cleanedText, reversedText, isPalindrome) {
        this.originalText = originalText;
        this.cleanedText = cleanedText;
        this.reversedText = reversedText;
        this.isPalindrome = isPalindrome;
    }

    // Returning a summary message
    getSummary() {
        if (this.isPalindrome) {
            return "Yes, this is a palindrome.";
        } else {
            return "No, this is not a palindrome.";
        }
    }
}

// Handling the form submit
function handleSubmit(event) {

    // Preventing page refresh
    event.preventDefault();

    // Getting input and output boxes
    var userText = document.getElementById("userText").value;
    var messageBox = document.getElementById("messageBox");
    var detailsBox = document.getElementById("detailsBox");

    // Validating blank input
    if (userText.trim() === "") {
        messageBox.innerHTML = "Please enter a word or phrase before submitting.";
        detailsBox.innerHTML = "";
        return false;
    }

    // Cleaning the input
    var cleanedText = cleanString(userText);

    // Validating if cleaned string is empty
    if (cleanedText === "") {
        messageBox.innerHTML = "Please enter letters or numbers only.";
        detailsBox.innerHTML = "";
        return false;
    }

    // Reversing the cleaned text
    var reversedText = reverseString(cleanedText);

    // Using if/else decision logic
    var isPalindrome = false;

    if (cleanedText === reversedText) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    // Creating an object
    var resultObject = {
        inputLength: userText.length,
        cleanedLength: cleanedText.length,
        firstCharacter: cleanedText.charAt(0),
        lastCharacter: cleanedText.charAt(cleanedText.length - 1)
    };

    // Creating a class object
    var result = new PalindromeResult(userText, cleanedText, reversedText, isPalindrome);

    // Showing result with innerHTML
    if (result.isPalindrome) {
        messageBox.innerHTML = "✅ " + result.getSummary();
    } else {
        messageBox.innerHTML = "❌ " + result.getSummary();
    }

    // Showing details with innerHTML
    detailsBox.innerHTML =
        "<p><strong>Original Input:</strong> " + result.originalText + "</p>" +
        "<p><strong>Cleaned Input:</strong> " + result.cleanedText + "</p>" +
        "<p><strong>Reversed Input:</strong> " + result.reversedText + "</p>" +
        "<p><strong>Original Length:</strong> " + resultObject.inputLength + "</p>" +
        "<p><strong>Cleaned Length:</strong> " + resultObject.cleanedLength + "</p>" +
        "<p><strong>First Character:</strong> " + resultObject.firstCharacter + "</p>" +
        "<p><strong>Last Character:</strong> " + resultObject.lastCharacter + "</p>";

    return false;
}

// Function to clean the string
function cleanString(text) {
    var cleaned = "";

    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text.charAt(i);
        var lowerCharacter = currentCharacter.toLowerCase();

        if (
            (lowerCharacter >= "a" && lowerCharacter <= "z") ||
            (lowerCharacter >= "0" && lowerCharacter <= "9")
        ) {
            cleaned += lowerCharacter;
        }
    }

    return cleaned;
}

// Function to reverse the string
function reverseString(text) {
    var reversed = "";

    for (var i = text.length - 1; i >= 0; i--) {
        reversed += text.charAt(i);
    }

    return reversed;
}