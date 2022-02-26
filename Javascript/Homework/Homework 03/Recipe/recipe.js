function myRecipe (header, list){
    let name = prompt('Tell me the name of the Recipe?');

    let ingredients = parseFloat(prompt(`How many ingredients would you need to make ${name}?`));

    for(let i = 0; i < ingredients; i++){
        ingredientsNames.push(prompt(`Write the ingredients that you need?`));
        list.innerHTML += `<li> ${ingredientsNames[i]} </li>`;
    } 
    header.innerHTML = `<h1>${name}</h1>`;
}
let ingredientsNames = [];
let myHeader = document.getElementById('header');
let myList = document.getElementById('my-list'); 

myRecipe(myHeader, myList);

