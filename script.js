var choice = ['rock', 'paper','scissors'];
var userScore = 0;
var compScore = 0;

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

btn1.addEventListener("click", getUserInput);
btn2.addEventListener("click", getUserInput);
btn3.addEventListener("click", getUserInput);

function getUserInput(event)
{
    //This function grabs the text from the event object
    //So the function knows which button calls it
    const word = event.target.textContent;
    const wordTrim = word.trim().toLowerCase();
    //console.log(wordTrim);
    singleRound(getComputerChoice(), wordTrim);
}

function getComputerChoice()
{
    //This function computes a random index which will be used in conjunction with our choice array 
    //To return a value that the 'computer' chooses
    return choice[Math.floor(Math.random() * 3)];
}

function singleRound(compChoice, userChoice)
{
    //Grab the div which will be used to display the result
    const resultH1 = document.getElementById('result');
    const usersScore = document.getElementById('user-score');
    const aiScore = document.getElementById('ai-score');

    if (userChoice == compChoice)
    {
        userScore += 1;
        aiScore += 1;
        aiScore.textContent = compScore;
        usersScore.textContent = userScore;
        resultH1.textContent =  "This is a tie! " + compChoice + " is the same as " + userChoice;
    }
    else if (userChoice == "paper")
    {
        if (compChoice == "rock")
        {
            userScore += 1;
            usersScore.textContent = userScore;
            resultH1.textContent = "Paper beats rock!";
        }
        else
        {
            compScore += 1;
            aiScore.textContent = compScore;
            resultH1.textContent = "Scissors beats paper!";
        }
    }
    else if (userChoice == "rock")
    {
        if (compChoice == "paper")
        {
            userScore += 1;
            usersScore.textContent = userScore;
            resultH1.textContent = "Rock beats scissors!";
        }
        else
        {
            compScore += 1;
            aiScore.textContent = compScore;
            resultH1.textContent = "Paper beats rock!";
        }
    }
    else
    {
        if (compChoice == "rock")
        {
            userScore += 1;
            usersScore.textContent = userScore;
            resultH1.textContent = "Scissors beats paper!"
        }
        else
        {
            compScore += 1;
            aiScore.textContent = compScore;
            resultH1.textContent = "Paper beats scissors";
        }
    }
    if(userScore == 5 || compScore == 5)
    {
        checkWinner(resultH1);
    }
}

function checkWinner(hOne){

    if (userScore == compScore)
    {
        hOne.textContent = "It is a tie";
    }
    else if (userScore > compScore)
    {
        hOne.textContent = "The user wins! Computers suck!";
    }
    else
    {
        hOne.textContent = "Computer wins! Humans are stupid!";
    }
}


