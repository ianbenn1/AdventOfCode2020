const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let code = [];
let jmpLocations = [];
let nopLocations = [];
let count = 0;
stringToUse.split("\n").forEach(line => {
    //Save all potentially corrupted instruction locations
    if(line.indexOf("nop") != -1)
    {
        nopLocations.push(Number(count));
    }
    else if (line.indexOf("jmp") != -1)
    {
        jmpLocations.push(Number(count));
    }
    count++;
    code.push(line);
});

let accumulator = 0;
let fixed = 0;
for (let jmpIns in jmpLocations)
{
    runSearch(jmpIns, "jmp", "nop");
}

if(fixed == 0)
{

    for (let nopIns in nopLocations)
    {
        runSearch(nopIns, "nop", "jmp");
    }

    if(fixed != 0) {
        console.log(accumulator);
    }
}

function runSearch(instr, toFind, toRepl) {
    let jmpIns = jmpLocations[instr];
    accumulator = 0;
    let visitedInstructions = [];
    
    for(let i = 0; i < code.length; i++)
    {
        let instruction = code[i];

        //Alter jmp to nop to try fixing it.
        if(i == jmpIns)
        {
            instruction = instruction.replace(toFind, toRepl);
        }

        if(visitedInstructions.includes(i))
        {
            // That didnt fix it. Repeating inst
            break;
        }
        visitedInstructions.push(i);
    
        // Decode instructions
        if(instruction.indexOf("nop") != -1) {
            //console.log("doing nothing")
        } else if (instruction.indexOf("acc") != -1) {
            if (instruction[4] == "+") {
                accumulator += Number(instruction.substring(5));
            } else {
                accumulator -= Number(instruction.substring(5));
            }
        } else if (instruction.indexOf("jmp") != -1) {
            if (instruction[4] == "+") {
                i += Number(instruction.substring(5));
                i--;
            } else {
                i -= Number(instruction.substring(5));
                i--;
            }
        } else if (instruction.indexOf("end") != -1) {
            console.log(accumulator);
            fixed = 1;
            break;
        }
    }

    // See if it ended
}