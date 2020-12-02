const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.

let valid = 0;
stringToUse.split("\n").forEach(element => {
    let total = 0;

    let hyphenPosi = element.indexOf("-");
    let minNum = element.substring(0, hyphenPosi);
    let spacePosi = element.indexOf(" ");
    let maxNum = element.substring(hyphenPosi+1, spacePosi);
    let character = element[spacePosi+1]

    let colonPosi = element.indexOf(":");
    let password = element.substring(colonPosi+2);
    
    minNum -= 1;
    maxNum -= 1;

    if(password[minNum] == character)
    {
        total++
    }
    if(password[maxNum] == character)
    {
        total++;
    }
    if(total == 1)
    {
        valid++;
    }
    // else
    // {
    //     console.log(`${password} is invalid ${total}`)
    // }
    
});
console.log(` ans ${valid}`);