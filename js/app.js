//Variables:
let board;
let turn = '';
let winner = false;
let tie = false;

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

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.querySelector('#message')
const gameBoardEl = document.querySelector('.board')


const init = () => {
    console.log('Init function called')
    board = ['','','','','','','','','']
    turn = 'X';
    winner = false;
    tie = false;
    render()
}
const currentSquareIndex = squareEls

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
function handleClick(event) {
    const currentSquareIndex = event.target.id;
    if ((squareEls[currentSquareIndex].textContent === 'X' || squareEls[currentSquareIndex].textContent === 'O') || winner) {
        return "working"
    } 
    if (board[currentSquareIndex].textContent === '') {
        placePiece() 
    }
}


squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
});

//create handleClick function
//add an event param
//attach event listener to the gameBoardEl
//add an event listener to each square element using a loop. this should respond to a click
//this event listener should call the handleClick from above.

function placePiece(currentSquareIndex) {
    // init.board[currentSquareIndex] = init.turn
    // console.log({
    //     currBoard: board[currentSquareIndex],
    //     currTurn: turn.value,
    //     newBoard: board[currentSquareIndex],
    //     newTurn: turn
    // }) 
    //when turn === 'X', place 'X' in squareEl
    // else if turn !== 'X', place 'O' in sqareEl
    if (turn === 'X') {
        currentSquareIndex = 'X' && square.removeEventListener('click')
    } else if (turn === 'O') {
        currentSquareIndex = 'O' && square.removeEventListener('click')
    }

}

function checkForWinner(currentSquareIndex) {
    // console.log(board)
   if (board === ''){
    return winner = false
} else
    if (currentSquareIndex === winningCombos[[0]])
    (currentSquareIndex === winningCombos[[1]])
    (currentSquareIndex === winningCombos[[2]])
    return winner = true
}

function checkForTie() {
    if (winner === true)
        return
    if (board.contains('') = true){
        tie = false
    } else if (board.contains('') = false) {
        tie = true}       
    console.log(tie)
} 

function switchPlayerTurn() {
    if (winner === true)
        return
    if (winner === false && turn === 'X')
        return turn = 'O'
    if (winner === false && turn === 'O')
        return turn = 'X' 
    console.log(turn)
    render()
}
const resetBtnEl = document.addEventListener('click', init)
