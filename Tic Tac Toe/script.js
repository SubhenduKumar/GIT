const submit = document.getElementById("submit")
const game = document.querySelector(".game")
const details = document.querySelector(".details")
const message = document.querySelector(".message")



let player1 = ""
let player2 = ""
let check = true
let playGame = true
let activePlayer = 0

function updateActivePlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else
        activePlayer = 0
}

function showMsg(msg) {
    message.innerHTML = `<h3>${msg}</h3>`
}


function checkPlayer(player1, player2) {
    if (player1 === "" || player2 === "") {
        alert("Enter Your Avatar")
        check = false
    }
}

function initializeGame(e) {
    player1 = document.getElementById("player1").value
    player2 = document.getElementById("player2").value
    checkPlayer(player1, player2)

    if (check) {
        activePlayer = 0;
        details.style.display = "none"
        game.style.display = "flex"
        showMsg(`${activePlayer===0?player1:player2}, You'r up😜!!`)
        for (let i = 1; i <= 9; i++) {
            const div = document.createElement("div")
            div.id = i
            div.classList.add("game-slot")


            div.addEventListener("click", function() {
                if (!div.innerText && playGame) {
                    div.innerText = activePlayer === 0 ? 'x' : "o"
                    const winner = checkWinner()
                    if (winner) {
                        showMsg(`😜 ${activePlayer===0?player1:player2}, Congo.... You Won😜!!`)
                    } else {
                        updateActivePlayer()
                        showMsg(`${activePlayer===0?player1:player2}, You'r up😜!!`)
                    }
                }
            })
            game.appendChild(div)
        }
    }
}

const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]




function checkWinner() {
    let winnerBool = false


    for (let i = 0; i < winningSequences.length; i++) {
        const winningCombo = winningSequences[i]

        const combo1 = document.getElementById(winningCombo[0] + 1)
        const combo2 = document.getElementById(winningCombo[1] + 1)
        const combo3 = document.getElementById(winningCombo[2] + 1)

        const val1 = combo1.innerText
        const val2 = combo2.innerText
        const val3 = combo3.innerText
        if (val1 === val2 && val2 === val3 && val1 != "") {
            combo1.style.backgroundColor = "purple"
            combo2.style.backgroundColor = "purple"
            combo3.style.backgroundColor = "purple"
            const reset = document.getElementById("reset")
            reset.style.display = "block"
            reset.addEventListener("click", function() {
                document.location.reload()
            })
            winnerBool = true
            playGame = false
            break;
        }
    }
    return winnerBool
}



submit.addEventListener("click", initializeGame)