var choice = ['Rock', 'Paper','Scissors'];
var userScore = 0;
var compScore = 0;

function getComputerChoice()
{
    //This function computes a random index which will be used in conjunction with our choice array 
    //To return a value that the 'computer' chooses
    return choice[Math.floor(Math.random() * 3)].toLowerCase();
}

function getUserInput()
{
    var userInput = prompt("Enter in a value of 'rock', 'paper' or 'scissors'");
    return userInput.toLowerCase()

}

function singleRound(compChoice, userChoice)
{
    if (userChoice == compChoice)
    {
        return "This is a tie! " + compChoice + " is the same as " + userChoice;
    }
    else if (userChoice == "paper")
    {
        if (compChoice == "rock")
        {
            userScore += 1;
            return "Paper beats rock!";
        }
        else
        {
            compScore += 1;
            return "Scissors beats paper!";
        }
    }
    else if (userChoice == "rock")
    {
        if (compChoice == "paper")
        {
            userScore += 1;
            return "Rock beats scissors!";
        }
        else
        {
            compScore += 1;
            return "Paper beats rock!";
        }
    }
    else
    {
        if (compChoice == "rock")
        {
            userScore += 1;
            return "Scissors beats paper!"
        }
        else
        {
            compChoice += 1;
            return "Paper beats scissors";
        }
    }
}

for(var i = 0; i < 5; i++)
    singleRound(getComputerChoice(), getUserInput());

if (userScore == compScore)
{
    console.log("It is a tie");
}
else if (userScore > compScore)
{
    console.log("The user wins! Computers suck!");
}
else
{
    console.log("Computer wins! Humans are stupid!");
}
console.log("userScore: " + userScore);
console.log("compScore: " + compScore);