const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let numYes = 0;
stringToUse.split("\n\n").forEach(group => {
    let list = [];
    let groupSize = 0;
    group.split("\n").forEach(person => {
        groupSize++;
        [...person].forEach(letter => {
            if(letter != '\n')
            {
                list.push(letter);
            }
        });
    });

    for (let i = 0; i < 26; i++)
    {
        let letter = (i+10).toString(36);
        if (list.filter(n => n == letter).length == groupSize)
        {
            numYes++;
            //console.log(`all ${groupSize} people in ${group} said yes to ${letter}`);
        }
    }






});
console.log(numYes);