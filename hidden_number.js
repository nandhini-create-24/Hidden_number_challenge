let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");

// Generate random number between 1 and 100
let randomNumber = Math.ceil(Math.random() * 100);

function checkGuess() 
{

    let guessedNumber = parseInt(userInput.value);

    if (isNaN(guessedNumber)) 
    {

        gameResult.textContent = "Please provide a valid input.";
        gameResult.style.backgroundColor = "#1e217c";

    } 
    else if (guessedNumber > randomNumber) 
    {

        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";

    } 
    else if (guessedNumber < randomNumber) {

        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";

    } 
    else {

        gameResult.textContent = "Congratulations! You got it right.";
        gameResult.style.backgroundColor = "green";

    }
}
