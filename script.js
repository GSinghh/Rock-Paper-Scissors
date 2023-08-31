var choice = ['rock', 'paper','scissors'];
var userScore = 0;
var compScore = 0;

function getComputerChoice()
{
    //This function computes a random index which will be used in conjunction with our choice array 
    //To return a value that the 'computer' chooses
    return choice[Math.floor(Math.random() * 3)];
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

// if (userScore == compScore)
// {
//     console.log("It is a tie");
// }
// else if (userScore > compScore)
// {
//     console.log("The user wins! Computers suck!");
// }
// else
// {
//     console.log("Computer wins! Humans are stupid!");
// }
// console.log("userScore: " + userScore);
// console.log("compScore: " + compScore);

//Convert all things that are being console logged into code for html file

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener("click", getUserInput);
btn2.addEventListener("click", getUserInput);
btn3.addEventListener("click", getUserInput);

function getUserInput(event)
{
    const word = event.target.innerHTML;
    const wordTrim = word.trim().toLowerCase();
    console.log(wordTrim);
    console.log(singleRound(getComputerChoice(), wordTrim));
}