const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let highestID = 0;
stringToUse.split("\n").forEach(element => {

    let rowNumLow = 0;
    let rowNumHi = 127;
    let colNumLow = 0;
    let colNumHi = 7;
    console.log(element);
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
    console.log("Row: " + row + " Col: " + col + " ID: " + ID);

    if(ID > highestID)
    {
        highestID = ID;
    }
});
console.log(highestID);