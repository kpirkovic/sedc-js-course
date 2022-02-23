//First Homework
function findMySymbol (){
    let count = 0;
    let foundSymbols = "";
    let showResults = document.getElementById("show-results");
    const myInput = document.getElementById('my-input').value;
    const symbols = ["$","@", "@", "@", "@", "*", "!", "(", ")", "$"];

    for(let i = 0; i < symbols.length; i++){
        if(myInput == symbols[i]){
            count += 1;
            foundSymbols = symbols[i];
        }
    }
    
    if(count > 0) {
        showResults.textContent = `The ${foundSymbols} symbol you entered has been found ${count} times.`;
        showResults.style.background = "rgb(127, 217, 240)";
    } else {
        showResults.textContent = `We were unable to identify the symbol you entered.`;
        showResults.style.background = "rgb(245, 54, 54)";
    }

    document.getElementById('my-input').value = "";
}

//Bonus Exercise

let userInputs;
let evenSum = 0;
let unevenSum = 0;
let displayEven = document.getElementById('even-num');
let displayUneven = document.getElementById('uneven-num');

for(let i = 0; i < 10; i++){
    userInputs = parseFloat(prompt(`Random number here (input ${i+1} of 10)`));
    if(userInputs % 2 === 0){
        evenSum += userInputs;     
        displayEven.textContent += userInputs + " + ";
    } else {
        unevenSum += userInputs;
        displayUneven.textContent += userInputs + " + ";
    }
}

displayEven.textContent += " = " + evenSum;
displayUneven.textContent += " = " + unevenSum;

if(evenSum > unevenSum) {
    document.write(`${evenSum} is bigger then ${unevenSum}`);
} else if (evenSum < unevenSum) {
    document.write(`${unevenSum} is bigger then ${evenSum}`);
} else {
    document.write(`They are equal or invalid`);
}
