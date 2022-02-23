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




