const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let numYes = 0;
stringToUse.split("\n\n").forEach(group => {
let list = [];
    [...group].forEach(letter => {
        if(!list.includes(letter) && letter != '\n')
        {
            numYes++
            list.push(letter);
        }
    });
});
console.log(numYes);