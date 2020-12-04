const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let valid = 0;
stringToUse.split("\n\n").forEach(element => {

    if(element.indexOf("byr:") != -1 && element.indexOf("iyr:") != -1 && element.indexOf("eyr:") != -1 && element.indexOf("hgt:") != -1 && element.indexOf("hcl:") != -1 && element.indexOf("ecl:") != -1 && element.indexOf("pid") != -1 )
    {
        valid++;
    }
});
console.log("valid: " + valid);