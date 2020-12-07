const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;
const testString2 = invals.teststring2;

let stringToUse = inputString; // Change this to run different input strings.
let count = 0;
let innerBagArray = {};
//bagColours.push("shiny gold")//({colour:"shiny gold", multiplier:);

stringToUse.split("\n").forEach(rule => {
    let containedBags = [];
    let i = 0;

    rule.split("bag").forEach(bag => {
        if(i != 0) 
        {
            let findNumRegex = /\d+/;
            let regexMatch = bag.match(findNumRegex);
            if(regexMatch != null)
            {
                let bagColour = bag.substring(regexMatch.index + 1).trim();
                //console.log(`1st bag *${firstbag}* contains ${regexMatch[0]} bags of *${bagColour}* colour`)
                containedBags[i] = [Number(regexMatch[0]), bagColour];
            }
        }
        i++;
    });
    innerBagArray[rule.substring(0, rule.indexOf(" bags"))] = containedBags;
    count++;
});

console.log(containsBag(innerBagArray, "shiny gold"));

function containsBag(currentArrayState, colour) {
    if (!currentArrayState[colour]) {
        return 0;
    }
    else {
        let containedBags = 0;
        currentArrayState[colour].forEach(containedBag => {
  
            containedBags += ((containedBag[0] * containsBag(currentArrayState, containedBag[1])) + containedBag[0] );
        });
  
        return containedBags;
    }
}