let humanScore = 0
let computerScore = 0
let Human = null
let Computer = null
let computerImg = null

document.querySelector('#start').onclick = () => playRound(humanScore);

function getComputerChoice() {
    const random = Math.floor(Math.random() * 3);
    if (random == 0) {
        computerImg = 'blue-rock.png';
        return 'rock'
    } else if (random == 1) {
        computerImg = 'blue-paper.png';
        return 'paper'
    } else {
        computerImg = 'blue-scissors.png';
        return 'scissors'
    }
}

function playRound() {
    document.querySelector('.display').style.justifyContent = "space-between";
    document.querySelector('.display').innerHTML = `<h2><b id="computer_win">${computerScore}</b> Computer <span>VS</span> Human <b id="human_win">${humanScore}</b></h2>
                                                    <div id="computer" style="background: url('${computerImg}');"></div>
                                                    <div class="panel">
                                                        <div id="red-rock"></div>
                                                        <div id="red-paper"></div>
                                                        <div id="red-scissors"></div>
                                                    </div>`;
    
    document.querySelector('#red-rock').onclick = () => play('rock');
    document.querySelector('#red-paper').onclick = () => play('paper');
    document.querySelector('#red-scissors').onclick = () => play('scissors');

    if (humanScore == 5) {
        alert('Win Human')
        humanScore = 0
        computerScore = 0
        computerImg = null
        playRound();
    } else if (computerScore == 5) {
        alert('Win Computer')
        humanScore = 0
        computerScore = 0
        computerImg = null
        playRound();
    }

}

function play(getHumanChoice) {
        Human = getHumanChoice
        Computer = getComputerChoice()

        if ((Human == "rock" && Computer == "scissors") || (Human == "paper" && Computer == "rock") || (Human == "scissors" && Computer == "paper")) {
            humanScore++;
        } else if (Human == Computer) {
            console.log(`Computer - ${Computer} ${computerScore}, Human - ${Human} ${humanScore}`)
        } else {
            computerScore++;
        }
        playRound();
}

// playRound()