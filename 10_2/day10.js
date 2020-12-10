const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let joltageAdapters = []
stringToUse.split("\n").forEach(line => {
    joltageAdapters.push(Number(line));
});
//Add joltage of plane
joltageAdapters.push(0);
//Add joltage of laptop
joltageAdapters.push(Math.max(...joltageAdapters) + 3);

joltageAdapters = joltageAdapters.sort((a, b) => {return a - b;});//Sort Numerically lo->hi : Reversed from pt1

console.log("Running...");
let memoized = {};

//Recursive solution
function part2(adapters) {

	//If saved in memo, return.
	if(memoized.hasOwnProperty(adapters.toString()))
	{
		return memoized[adapters.toString()];
	}

	let res = 1;
	for(let i = 1; i < adapters.length - 1; i++)
	{
		if(adapters[i+1] - adapters[i-1] <= 3)
		{
			let recallAdapters = [adapters[i-1]].concat(adapters.slice(i+1));
			//console.log(recallAdapters);
			res += part2(recallAdapters);
		}
	}
	memoized[adapters.toString()] = res;
	return res;
}
console.log(part2(joltageAdapters));