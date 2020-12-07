const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let valid = 0;
let bagColours = [];
bagColours.push("shiny gold");

let count = 0;
do {
    containsBag(bagColours[count]);
    count++
} while (count < bagColours.length)

console.log(valid);

function containsBag(colour) {
    stringToUse.split("\n").forEach(rule => {
        if (rule.indexOf(colour) != -1 && rule.indexOf(colour) != 0) 
        {
            
            let firstbag = rule.substring(0, rule.indexOf(" bags"));
            //console.log(`a ${firstbag} bag can hold a ${colour} bag`)
            if(!bagColours.includes(firstbag))
            {
                bagColours.push(firstbag);
                //console.log(`pushing ${firstbag} bag`)
                valid++;
            }
        }
    });
}