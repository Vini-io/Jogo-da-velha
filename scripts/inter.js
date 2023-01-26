
let board = ['', '', '', '', '', '', '', '', ''];
let timePlayer = 0;
let symbols = ['x', 'o']
let pointX = 0;
let pointO = 0;

document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.addEventListener("click", playTurn)
    })
})

function playTurn(event) {

    let square = event.target;
    if (board[square.id] == '') {
        board[square.id] = symbols[timePlayer];
        square.innerHTML = `<div class="${symbols[timePlayer]} ">${symbols[timePlayer]}</div>`;
        checkWin(symbols[timePlayer]);
        if (timePlayer == 0) {
            timePlayer = 1;
        } else {
            timePlayer = 0;
        }
    }
}

function checkWin(symbols) {

    if (board[0] == symbols && board[1] == symbols && board[2] == symbols) {
        winGame(symbols)
    } else if (board[3] == symbols && board[4] == symbols && board[5] == symbols) {
        winGame(symbols)
    } else if (board[6] == symbols && board[7] == symbols && board[8] == symbols) {
        winGame(symbols)
    } else if (board[0] == symbols && board[3] == symbols && board[6] == symbols) {
        winGame(symbols)
    } else if (board[1] == symbols && board[4] == symbols && board[7] == symbols) {
        winGame(symbols)
    } else if (board[2] == symbols && board[5] == symbols && board[8] == symbols) {
        winGame(symbols)
    } else if (board[0] == symbols && board[4] == symbols && board[8] == symbols) {
        winGame(symbols)
    } else if (board[6] == symbols && board[4] == symbols && board[2] == symbols) {
        winGame(symbols)
    }

    if (board[0] != '' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != '' && board[8] != '') {
        tieGame()
    }
}

function tieGame() {
    document.querySelector(".body-tieGame").style.display = "flex"
}

document.querySelector(".tieStartGame").addEventListener("click", () => {
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelector(".body-tieGame").style.display = "none"
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.innerHTML = ''
    })
})

function winGame(symbols) {

    if (symbols == 'x') {
        document.querySelector(".winnerPlayer").innerHTML = "Player-1"
        pointX++;
    } else {
        document.querySelector(".winnerPlayer").innerHTML = "Player-2"
        pointO++;
    }
    board = ['', '', '', '', '', '', '', '', ''];
    document.querySelector(".body-winnerPlayer").style.display = "flex"
    document.querySelector(".pointP1").innerHTML = pointX;
    document.querySelector(".pointP2").innerHTML = pointO;

}

document.querySelector(".winnerStartGame").addEventListener("click", () => {
    document.querySelector(".body-winnerPlayer").style.display = "none"
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.innerHTML = ''
    })
})


// start game

document.querySelector(".btn-play").addEventListener("click", () => {
    document.querySelector(".loader").classList.add("show-loader")
    document.querySelector(".body-options").style.display = "none"


    setTimeout(() => {
        document.querySelector(".body-menu_game").style.display = "none"
        document.querySelector(".body-game").style.display = "flex"
        document.querySelector(".loader").classList.add("show-loader")
        setTimeout(() => {
            document.querySelector(".loader").classList.remove("show-loader")
        }, 1000);
    }, 2000);
})

//reset

document.querySelector(".reset").addEventListener("click", () => {

    pointO = 0;
    pointX = 0;
    document.querySelector(".pointP1").innerHTML = pointX;
    document.querySelector(".pointP2").innerHTML = pointO;
    board = ['', '', '', '', '', '', '', '', ''];

    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.innerHTML = ''
    })
})
document.querySelector(".back").addEventListener("click", () => {

    document.querySelector(".loader").classList.add("show-loader")

    setTimeout(() => {
        document.querySelector(".body-menu_game").style.display = "flex"
        document.querySelector(".body-game").style.display = "none"
        document.querySelector(".loader").classList.add("show-loader")
        setTimeout(() => {
            document.querySelector(".loader").classList.remove("show-loader")
        }, 1000);
    }, 2000);
})



// sair do jogo


document.querySelector(".close").addEventListener("click", () => {
    window.close();
})

//options player


function modPlayer1() {
    let getNamePlayer1 = document.querySelector("#getPlayer1").value
    console.log(getNamePlayer1)
    document.querySelector("#name-player1").innerHTML = getNamePlayer1;
}

function modPlayer2() {
    let getNamePlayer2 = document.querySelector("#getPlayer2").value
    document.querySelector("#name-player2").innerHTML = getNamePlayer2;
}

document.querySelector(".btn-op").addEventListener("click", ()=>{
    document.querySelector(".body-options").style.display = "flex"
})

document.querySelector(".op-close").addEventListener("click", ()=>{
    document.querySelector(".body-options").style.display = "none"
})