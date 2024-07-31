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
    board = ['','','','','','','','','']
    turn = 'X';
    winner = false;
    tie = false;
}
init()
const render = () => {
}

const updateBoard = () => {
    board.forEach((square, index) => {
        square = squareEls[index]
})}
