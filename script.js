document.addEventListener("DOMContentLoaded", () => {
    const playerDisplay = document.getElementById("playerChoice");
    const computerDisplay = document.getElementById("computerChoice");
    const resultDisplay = document.getElementById("resultText");
    const buttons = document.querySelectorAll("button");
    const playerScoreDisplay = document.getElementById("playerScore");
    const computerScoreDisplay = document.getElementById("computerScore");

    const choices = ["rock", "paper", "scissors"];

    let playerScore = 0;
    let computerScore = 0;
    const maxScore = 5;

    const divReset = document.getElementsByClassName('reset')[0];
    const divSelectionBTNS = document.getElementsByClassName('btns')[0];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if ((playerScore < maxScore) && (computerScore < maxScore)){
                const playerChoice = button.dataset.choice;
                console.log(playerChoice);
                const computerChoice = getComputerChoice();
                const result = getResult(playerChoice, computerChoice);

                playerDisplay.textContent = `Player: ${capitalize(playerChoice)}`;
                computerDisplay.textContent = `Computer: ${capitalize(computerChoice)}`;
                resultDisplay.textContent = result;

                updateScore();
            } else {
                const resetBTN = button.dataset.reset;
                resetVariables(resetBTN);
                divSelectionBTNS.style.backgroundColor = "red";
            }
            
            
        });
    });

    function getComputerChoice() {
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }

    function getResult(player, computer) {
        if (player === computer) return "It's a Tie!";
        if (
            (player === "rock" && computer === "scissors") ||
            (player === "paper" && computer === "rock") ||
            (player === "scissors" && computer === "paper")
        ) {
            playerScore++;
            return "You Win!";

        } else {
            computerScore++;
            return "You Lose!";
        }
    }

    function updateScore() {

        playerScoreDisplay.textContent = `Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Score: ${computerScore}`;

        if ((playerScore == maxScore) || (computerScore == maxScore)){
            resultDisplay.textContent = "Game over" ;
            if (playerScore > computerScore){
                playerDisplay.textContent = "Player";
                computerDisplay.textContent = "Computer";
                playerScoreDisplay.textContent = "WINNER";
                computerScoreDisplay.textContent = "LOSER";
            } else {
                playerDisplay.textContent = "Player";
                computerDisplay.textContent = "Computer";
                playerScoreDisplay.textContent = "LOSER";
                computerScoreDisplay.textContent = "WINNER";
            }   
            divReset.style.display = "block";

        }
    }

    function resetVariables(ret){

        if (ret === "reset"){
            playerScore = 0;
            computerScore = 0;
            playerScoreDisplay.textContent = `Score: ${playerScore}`;
            computerScoreDisplay.textContent = `Score: ${computerScore}`;
            resultDisplay.textContent = `Make your move`;
            divReset.style.display = "none";
        }
    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
