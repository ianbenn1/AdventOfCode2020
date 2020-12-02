const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let total = 0;
let wrong = 0;
stringToUse.split("\n").forEach(element => {
    total++;

    let hyphenPosi = element.indexOf("-");
    let minNum = element.substring(0, hyphenPosi);
    let spacePosi = element.indexOf(" ");
    let maxNum = element.substring(hyphenPosi+1, spacePosi);
    let character = element[spacePosi+1]

    //console.log(`mi ${minNum}  ma ${maxNum}  ch ${character}   pa ${password}`)

    let colonPosi = element.indexOf(":");
    let password = element.substring(colonPosi+2);
    

    let characterCountinPword = (password.split(character).length - 1);
    //console.log(`${element} contains ${characterCountinPword} ${character}'s`)
    if(characterCountinPword > maxNum || characterCountinPword < minNum)
    {
        //console.log(element + " is wrong");
        wrong++;
    }
    
});

console.log(`total ${total}   wrong ${wrong}  ans ${total-wrong}`);