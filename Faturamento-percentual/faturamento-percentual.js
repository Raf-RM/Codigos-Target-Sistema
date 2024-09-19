const monthlyBilling = {
"SP" : 67836.43, 
"RJ" : 36678.66, 
"MG" : 29229.88, 
"ES": 27165.48, 
"Outros" : 19849.53,
};

function percentage(data){
    var values = Object.values(monthlyBilling);
    var keys = Object.keys(monthlyBilling);
    var perntualBilling = {}
    total = 0;
    totalPercent = 0;
    
    for(let i in values){
        total += values[i]; 
    }

    for(let i in values){
        percentage[keys[i]] = Number(values[i] * 100 / total);
    }


    console.log(percentage)
}

percentage(monthlyBilling)