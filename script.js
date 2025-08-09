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

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const playerChoice = button.dataset.choice;
            const computerChoice = getComputerChoice();
            const result = getResult(playerChoice, computerChoice);

            playerDisplay.textContent = `Player: ${capitalize(playerChoice)}`;
            computerDisplay.textContent = `Computer: ${capitalize(computerChoice)}`;
            resultDisplay.textContent = result;

            updateScore();

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
        // if (result === "You Win!") {
        //     playerScore++;
        // } else if (result === "You Lose!") {
        //     computerScore++;
        // }

        playerScoreDisplay.textContent = `Score: ${playerScore}`;
        computerScoreDisplay.textContent = `Score: ${computerScore}`;

        if ((playerScore == maxScore) || (computerScore == maxScore)){
            resultDisplay.textContent = "Game over" ;
            if (playerScore > computerScore){
                playerDisplay.textContent = "";
                computerDisplay.textContent = "";
                playerScoreDisplay.textContent = "WINNER";
                computerScoreDisplay.textContent = "LOSER";
            } else {
                playerDisplay.textContent = "";
                computerDisplay.textContent = "";
                playerScoreDisplay.textContent = "LOSER";
                computerScoreDisplay.textContent = "WINNER";
            }
        }

    }

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
});
