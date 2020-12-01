const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let stringCopy = stringToUse;
stringToUse.split("\n").forEach(element => {
    stringCopy.split("\n").forEach(element2 => {
        let temp = Number(element2) + Number(element);
        if(temp == 2020)
        {
            console.log(`found 1 ${element} 2 ${element2}  ans ${element*element2}`);
        }
        else {
            //console.log(`Not ${element} and ${element2}   theyre ${temp}`);
        }
    });
});