const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let stringCopy = stringToUse;
let stringCopy2 = stringToUse;
stringToUse.split("\n").forEach(element => {
    stringCopy.split("\n").forEach(element2 => {
        stringCopy2.split("\n").forEach(element3 => {
            let temp = Number(element3) + Number(element2) + Number(element);
            if(temp == 2020)
            {
                console.log(`found 1 ${element} 2 ${element2} 3 ${element3} ans ${element*element2*element3}`);
            }
            else {
                //console.log(`Not ${element} and ${element2}   theyre ${temp}`);
            }
        });
    });
});