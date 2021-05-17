// **** Global variables
let cells = document.querySelectorAll(".row > div"), clickCount = 0;
let gameOver = false;
let player = ['x', 'o'];

// **** Adds event listener for each cell on the board. 
cells.forEach(cell => {
    cell.addEventListener('click', clickedCell);
});


// **** Control what happens when a cell is clicked. 
function clickedCell(ev) {
    playerCheck(ev);
    winCheck();
}

function playerCheck(ev) {
    // define variables
    let cell = ev.target.textContent;
    //Start with X
    if (clickCount === 0 && cell === '' ) {
        ev.target.textContent = 'x';
        clickCount++
    }
    // **** If click is even, add an X.
    else if (clickCount++ % 2 == 0 && cell === '') {
        ev.target.textContent = 'x';
    }
    else if (cell !== '') {
        return
    }
    // **** Else, do nothing.
    else {
        ev.target.textContent = 'o';
    }
}


function winCheck() {
    if (cells[0].textContent === player ) {
        if (cells[1].textContent === player && cells[2].textContent === player) {
            console.log('this worked')
        }            
    }
    if (cells[0].textContent === player ) {
        if (cells[4].textContent === player && cells[8].textContent === player) {
            console.log('this worked')
        }            
    }
}

// for (let i = 0; i < cells.length; i++) {
//     cells[i].addEventListener('click', cellClicked);
    
// }

// function cellClicked(ev) {
//     if ( ev.target.textContent === '') {
//         ev.target.textContent = marks[i];
//     }
//     else if (ev.target.textContent !== ''){
//         console.log('This cell is occupied!!!');
//     }    
// }

