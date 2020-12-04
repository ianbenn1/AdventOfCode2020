const invals = require('./input.js');

const inputString = invals.inputstring;
const testString1 = invals.teststring1;

let stringToUse = inputString; // Change this to run different input strings.
let valid = 0;
stringToUse.split("\n\n").forEach(element => {

    let byridx = element.indexOf("byr:");
    let iyridx = element.indexOf("iyr:");
    let eyridx = element.indexOf("eyr:");
    let hgtidx = element.indexOf("hgt:");
    let hclidx = element.indexOf("hcl:");
    let eclidx = element.indexOf("ecl:");
    let pididx = element.indexOf("pid:");

    if( byridx != -1 && iyridx != -1 && eyridx != -1 && hgtidx != -1 && hclidx != -1 && eclidx != -1 && pididx != -1 )
    {
        let byr = element.substring(byridx+4, byridx+4 + nextspaceornewline(element.substring(byridx+4)));
        let iyr = element.substring(iyridx+4, iyridx+4 + nextspaceornewline(element.substring(iyridx+4)));
        let eyr = element.substring(eyridx+4, eyridx+4 + nextspaceornewline(element.substring(eyridx+4)));
        let hgt = element.substring(hgtidx+4, hgtidx+4 + nextspaceornewline(element.substring(hgtidx+4)));
        let hcl = element.substring(hclidx+4, hclidx+4 + nextspaceornewline(element.substring(hclidx+4)));
        let ecl = element.substring(eclidx+4, eclidx+4 + nextspaceornewline(element.substring(eclidx+4)));
        let pid = element.substring(pididx+4, pididx+4 + nextspaceornewline(element.substring(pididx+4)));
        
        if(byr >= 1920 && byr <= 2002)
        {
            if(iyr >= 2010 && iyr <= 2020)
            {
                if(eyr >= 2020 && eyr <= 2030)
                {
                    if(((hgt.indexOf("cm") != -1) && (hgt.slice(0, -2) >= 150 && hgt.slice(0, -2) <= 193) || ((hgt.indexOf("in") != -1) && (hgt.slice(0, -2) >= 59 && hgt.slice(0, -2) <= 76))))
                    {
                        if(hcl.indexOf("#") == 0 && hcl.length == 7 && isAlphaNumeric(hcl.slice(1)))
                        {
                            if(ecl == "amb" || ecl == "blu" || ecl == "brn" || ecl == "gry" || ecl == "grn" || ecl == "hzl" || ecl == "oth")
                            {
                                if(pid.length == 9)
                                {
                                    valid++;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

});

console.log("valid: " + valid);

function nextspaceornewline(string)
{
    let space = string.indexOf(" ");
    let newline = string.indexOf("\n");
    if(space > 0 && newline == -1)
    {
        return space;
    }
    if(space > 0 && space < newline)
    {
        return space;
    }
    else if(newline > 0)
    {
        return newline;
    }
    else
        return string.length;
}

function isAlphaNumeric(str)
{
    let die = false;
    [...str].forEach(char => {
        let isnum = false;
        if(Number(char) != NaN && char >= 0 && char <= 9)
        {
            isnum = true;
        }
        else if(!isnum && (char == 'a' || char == 'b' || char == 'c' || char == 'd' || char == 'e' || char == 'f' ))
        {
            //console.log(char + " is alp")
        }
        else
            die = true;
    });

    if(die)
        return false;
    else
        return true;
}