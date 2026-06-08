let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
        return 'rock'
    } else if (random == 1) {
        return 'paper'
    } else {
        return 'scissors'
    }
}

function getHumanChoice() {
    let complite = 0
    while (complite < 1) {
        const select = prompt("1.Rock, 2.Paper, 3.Scissors")
        
        if (select == 1) {
            return 'rock'
        } else if (select == 2) {
            return 'paper'
        } else if (select == 3) {
            return 'scissors'
        } else {
            alert('Error Select')
        }
    }
}

function playRound() {
    alert('Start Games')
    let Human = null
    let Computer = null

    while ((humanScore < 5) && (computerScore < 5)) {
        Human = getHumanChoice()
        Computer = getComputerChoice()

        if ((Human == "rock" && Computer == "scissors") || (Human == "paper" && Computer == "rock") || (Human == "scissors" && Computer == "paper")) {
            humanScore++;
            alert(`Computer - ${Computer} ${computerScore}, Win Human - ${Human} ${humanScore}`)
        } else if (Human == Computer) {
            alert(`Computer - ${Computer} ${computerScore}, Human - ${Human} ${humanScore}`)
        } else {
            computerScore++;
            alert(`Win Computer - ${Computer} ${computerScore}, Human - ${Human} ${humanScore}`)
        }
    }

    if (humanScore == 5) {
        alert('Win Human')
    } else {
        alert('Win Computer')
    }


}

playRound()