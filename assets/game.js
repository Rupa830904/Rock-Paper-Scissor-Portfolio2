/* jshint esversion: 6 */
//initial user score
let userScore = 0;
//initial computer score
let computerScore = 0;
const userScore_span = document.getElementById ("user-score");
const computerScore_span = document.getElementById ("computer-score");
//result output for user
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("r");
let paper_div = document.getElementById("p");
let scissors_div = document.getElementById("s");
let lizard_div = document.getElementById("l");
let spock_div = document.getElementById("o");
let reset_div = document.getElementById("ri");
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];




//Function to get the computer choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor','lizard','spock'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices [randomNumber];
}

//Function when User Wins
function win (computer) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Computer Choose: " + computer + ". You win!!";
    result_div.style.color = "green";
}

//Function when User Looses
function loose (computer) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Computer Choose: " + computer + ". You loose!!";
    result_div.style.color = "red";
}

//Function when It's a draw
function draw (computer) {
    result_div.innerHTML = "Computer also Choose: " + computer + ". It's a draw!!";
    result_div.style.color = "black";
}

//Function when User wants to reset the game
function reset_score() {
    userScore = 0;
    computerScore = 0;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = "Try Again!";
    result_div.style.color = "purple";
}

//The main game function to decide the winner

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
        win(computerChoice);
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
        loose(computerChoice);
        break;
       case "rrock":
       case "ppaper":
       case "sscissor":
       case "llizard":
       case "ospock":
        draw(computerChoice);
        break;
    }
}
   

//Get the userchoice when user clicks on a game button
function main() {
    rock_div.addEventListener('click', function() {
        game("r");
    });
    paper_div.addEventListener('click', function() {
        game("p");
    });
    scissors_div.addEventListener('click', function() {
        game("s");
    });
    lizard_div.addEventListener('click', function() {
        game("l");
    });
    spock_div.addEventListener('click', function() {
        game("o");
    });
    reset_div.addEventListener('click', function() {
        reset_score();
    });

}


btn.onclick = function() {
    modal.style.display = "block";
  };

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
};
  

main ();







