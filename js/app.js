//Variables:
let board;
let turn
let winner
let tie

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('message')
const gameBoardEl = document.querySelector('.board')

// console.log(squareEls)
// console.log(messageEl)

const init = () => {
    console.log('Init function called')
    board = ['','X','','','','','O','','']
    turn = 'X';
    winner = false;
    tie = false;
    render()
}
init()
function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((square, index) => {
      if (square === 'X') {
        squareEls[index].textContent = 'X'
        } else if (square === 'O') {
            squareEls[index].textContent = 'O'
        } else {
            squareEls[index].textContent = ''
        }
    })
}

function updateMessage () {
    if (winner === false && tie === false) {
        if (turn === 'X') {
            messageEl.textContent = "It's X's turn"
        } else {
            messageEl.textContent = "it's O's turn"
        }
    } 
    if (winner === false && tie === true) {
        messageEl.textContent = "It's a tie!"
    }
    if (winner === true && tie === false) {
        if (turn === 'X') {
        messageEl.textContent = "Congratulations X! You Won!"
    } else {
        messageEl.textContent = "Congratulations O! You Won"
    }
}
}
const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2],
]