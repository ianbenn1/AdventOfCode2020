const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let code = [];
stringToUse.split("\n").forEach(line => {
    code.push(line);
});

let accumulator = 0;
let visitedInstructions = [];

for(let i = 0; i < code.length; i++)
{
    let instruction = code[i];
    if(visitedInstructions.includes(i))
    {
        console.log("Repeating inst " + i);
        break;
    }
    visitedInstructions.push(i);

    // Decode instructions
    if(instruction.indexOf("nop") != -1)
    {
        //do nothing
    }
    else if(instruction.indexOf("acc") != -1)
    {
        if (instruction[4] == "+")
        {
            accumulator += Number(instruction.substring(5));
        }
        else {
            accumulator -= Number(instruction.substring(5));
        }
    }
    else if(instruction.indexOf("jmp") != -1)
    {
        if (instruction[4] == "+")
        {
            i += Number(instruction.substring(5));
            i--; //undo for loop incrementation
        }
        else {
            i -= Number(instruction.substring(5));
            i--; //undo for loop incrementation
        }
    }
}

console.log(accumulator);