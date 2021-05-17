// **** Define variable for all 9 cells. 
let cells = document.querySelectorAll(".row > div"), clickCount = 0;

// **** Adds event listener for each cell on the board. 
cells.forEach(cell => {
    cell.addEventListener('click', clickedCell);
});


// **** Control what happens when a cell is clicked. 
function clickedCell(ev) {
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

