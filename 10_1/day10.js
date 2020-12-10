const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let oneJdiff = 0;
let threeJdiff = 0;
let joltageAdapters = []
stringToUse.split("\n").forEach(line => {
    joltageAdapters.push(Number(line));
});

//Add joltage of plane
joltageAdapters.push(0);
//Add joltage of laptop
joltageAdapters.push(Math.max(...joltageAdapters) + 3);

joltageAdapters = joltageAdapters.sort((a, b) => {return b - a;});//Sort Numerically high-lo
let prevJoltage = 0;
for(let adapter in joltageAdapters)
{
    if ((prevJoltage - joltageAdapters[adapter]) == 1)
    {
        oneJdiff++;
    }
    else if((prevJoltage - joltageAdapters[adapter]) == 3)
    {
        threeJdiff++;
    }
    prevJoltage = joltageAdapters[adapter];

}
console.log(oneJdiff * threeJdiff);