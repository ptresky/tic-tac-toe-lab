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
const resetBtnEl = document.querySelector('#reset')


const init = () => {
    console.log('Init function called')
    board = ['','','','','','','','','']
    turn = 'X';
    winner = false;
    tie = false;
    render()
}
// const currentSquareIndex = squareEls

init()

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    console.log(board)
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
    // the current indx of the target from our click event 
    const currentSquareIndex = event.target.id;
    // 
    
    // if the square target contains x or o or the winner is true, terminate the function by returning

    if ((squareEls[currentSquareIndex].textContent === 'X' || squareEls[currentSquareIndex].textContent === 'O') || winner) {
        console.log(board[currentSquareIndex])
        return 
    } 

    // this is the code to run if the square is empty string
    placePiece(currentSquareIndex)
    checkForWinner()
    checkForTie()
    switchPlayerTurn()
    render()
}


squareEls.forEach(square => {
    square.addEventListener('click', handleClick);
    }
)

//create handleClick function
//add an event param
//attach event listener to the gameBoardEl
//add an event listener to each square element using a loop. this should respond to a click
//this event listener should call the handleClick from above.

function placePiece(currentSquareIndex) {
   board[currentSquareIndex] = turn
}

function checkForWinner(currentSquareIndex) {
    // console.log(board)
   if (board === ''){
    return winner = false
    } else {
        // check winningCombos that match what is on the board via the 
        // indexes of the board.
        // const [a, b, c] = winningCombos[]
        for (const combo of winningCombos) {
            const [a, b, c] = combo;
            if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
                return winner = true
            }
        }
    }
}

function checkForTie() {
    if (checkForWinner()){
        return
    }
    let fullboard = board.includes('');
    tie = !fullboard
    
    
    // if (board.includes('') = true){
    //     tie !== true
    // }
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
resetBtnEl.addEventListener('click', init)
