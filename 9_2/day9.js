const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let preambleLen = 25;//25 for real data!
let preamble = [];
let input = [];
let count = 0;
let part1result = 0;
stringToUse.split("\n").forEach(line => {
    input.push(Number(line));
    if(count < preambleLen)
    {
        preamble.push(Number(line));
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
            part1result = Number(line);
        }
        preamble.shift();
        preamble.push(Number(line));
    }
    count++;
});

//Part 2
let startingPoint = 0;
let foundSum = 0;
do {
    let sum = 0;
    let smallestNum = 0;
    let largestNum = 0;
    for(let i = startingPoint; i < input.length; i++)
    {
        if(input[i] > largestNum)
        {
            largestNum = input[i];
        }
        if(smallestNum == 0 || smallestNum > input[i])
        {
            smallestNum = input[i];
        }
        sum += input[i];
        if(sum == part1result)
        {
            foundSum = 1;
            console.log("Found sum. smallest: " + smallestNum + " biggest: " + largestNum + " sum: " + (smallestNum + largestNum));
            break;
        }
    }
    startingPoint++;
    if(startingPoint > input.length)
    {
        console.log("We have a problem");
    }
    
} while (foundSum == 0);


