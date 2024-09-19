const fs = require("fs");
const dataMonth = JSON.parse(fs.readFileSync("dados.json", "utf8"));

var total = 0 ;
var count = 0;
var countMax = 0;
var minor = dataMonth[0].valor;
var max = 0;
var average = 0;

for(let data in dataMonth){

    if(dataMonth[data].valor != 0){
        total += dataMonth[data].valor;
        count += 1;
        if(dataMonth[data].valor >= max){
            max = dataMonth[data].valor;
        }
        if(dataMonth[data].valor <= minor && dataMonth[data].valor != 0){
			minor = dataMonth[data].valor;
		}
    }   
}

average = total/count;

for(let data in dataMonth){
	
    if(dataMonth[data].valor > average){
        countMax += 1;
    }   
}

console.log(average)
console.log(minor)
console.log(max)
console.log(countMax)
