const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let preambleLen = 25;//25 for real data!
let preamble = []
let count = 0;
stringToUse.split("\n").forEach(line => {
    if(count < preambleLen)
    {
        preamble.push(Number(line));
        console.log("Pushing" + line);
    }
    else {
        let sumFound = 0;
        for(let i = 0; i < preambleLen; i++)
        {
            for(let j = 0; j < preambleLen; j++)
            {
                if(Number(line) == (preamble[i] + preamble[j]))
                {
                    sumFound = 1;
                    break;
                }
            }
        }
        if(sumFound == 0)
        {
            console.log("No sum was found for " + line);
            //break;
        }
        preamble.shift();
        preamble.push(Number(line));
    }
    count++;
});
console.log("ended", preamble)