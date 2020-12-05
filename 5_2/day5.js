const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let highestID = 0;
let seatlist = [];
stringToUse.split("\n").forEach(element => {

    let rowNumLow = 0;
    let rowNumHi = 127;
    let colNumLow = 0;
    let colNumHi = 7;
    [...element].forEach(char => {
        if(char == 'F')
        {
            rowNumHi = rowNumHi - ((rowNumHi - rowNumLow)/2);
        }
        else if(char == 'B')
        {
            rowNumLow = rowNumLow + ((rowNumHi - rowNumLow)/2);
        }
        if(char == 'L')
        {
            colNumHi = colNumHi - ((colNumHi - colNumLow)/2);
        }
        else if(char == "R")
        {
            colNumLow = colNumLow + ((colNumHi - colNumLow)/2);
        }
    });
    let row = Math.floor(rowNumHi);
    let col = Math.floor(colNumHi);
    let ID = (row * 8) + col;

    seatlist.push(Number(ID));
});

let prevSeat = 
seatlist.sort((a, b) => a - b);
let count = 0;
seatlist.forEach(seat => {
    if(count == 0)
    {
        count++;
        prevSeat = seat;
    }
    else if (seat != (prevSeat+1))
    {
           console.log("Missing seat:" + (seat - 1));
    }
    prevSeat = seat;
});