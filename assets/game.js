let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices [randomNumber];
}

function win (user,computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Computer Choose: " + computer + ". You win!!";
}
function loose (user,computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Computer Choose: " + computer + ". You loose!!";
}

function draw (user,computer) {
    result_div.innerHTML = "Computer also Choose: " + computer + ". It's a draw!!";
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
       case "rscissor":
       case "prock":
       case "spaper":
        win(userChoice,computerChoice);
        break;
       case "rpaper":
       case "pscissor":
       case "srock":
        loose(userChoice,computerChoice);
        break;
       case "rrock":
       case "ppaper":
       case "sscissor":
        draw(userChoice,computerChoice);
        break;
    }
};
   


function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    })
    paper_div.addEventListener('click', function() {
        game("p");
    })
    scissors_div.addEventListener('click', function() {
        game("s");
    })
}

main ()

