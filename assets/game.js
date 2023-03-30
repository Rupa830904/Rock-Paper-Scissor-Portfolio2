let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let lizard_div = document.getElementById("l");
let spock_div = document.getElementById("o");
let reset_div = document.getElementById("ri")

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor','lizard','spock'];
    const randomNumber = Math.floor(Math.random() * 5);
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

function reset_score() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
       case "rscissor":
       case "prock":
       case "spaper":
       case "lpaper":
       case "lspock":
       case "oscissor":
       case "orock":
       case "rlizard":
       case "pspock":
       case "slizard":
        win(userChoice,computerChoice);
        break;
       case "rpaper":
       case "pscissor":
       case "srock":
       case "lrock":
       case "lscissor":
       case "opaper":
       case "olizard":
       case "rspock":
       case "plizard":
       case "sspock":
        loose(userChoice,computerChoice);
        break;
       case "rrock":
       case "ppaper":
       case "sscissor":
       case "llizard":
       case "ospock":
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
    lizard_div.addEventListener('click', function() {
        game("l");
    })
    spock_div.addEventListener('click', function() {
        game("o");
    })
    reset_div.addEventListener('click', function() {
        reset_score();
    })

}

main ();

