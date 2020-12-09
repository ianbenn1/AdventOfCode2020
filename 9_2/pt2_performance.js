const invals = require('./input.js');
const { performance } = require('perf_hooks');

// Original implementation runs in ~31.5ms. Lets beat that
// This is about 6.5ms

var t0 = performance.now();
const inputString = invals.inputstring;

let stringToUse = inputString;
let preambleLen = 25;
let preamble = [];
let input = [];
let count = 0;
let part1result = 0;
stringToUse.split("\n").forEach(line => {
    input.push(Number(line));//Only pushes up to the non-summed #. #'s are fairly incremental, so should work
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
            if(sumFound == 1)
            {
                break;
            }
        }
        if(sumFound == 0)
        {
            part1result = Number(line);
            part2();
        }
        preamble.shift();
        preamble.push(Number(line));
    }
    count++;
});

function part2() {
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
                var t1 = performance.now();
                console.log("Found sum: " + (smallestNum + largestNum) + "\nTime: " + (t1-t0) + " milliseconds");
                break;
            }
        }
        startingPoint++;
        if(startingPoint > input.length)
        {
            console.log("We have a problem");
        }
        
    } while (foundSum == 0);
}


