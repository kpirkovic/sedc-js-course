const addIngredient = document.getElementById('add-ingredient');
const recipeName = document.getElementById('recipe-name');
const errorMessage = document.getElementById('error');
const recipes = [];

addIngredient.addEventListener('click', function(){
    checkInputs();
});
function checkInputs(){
    let filed = 'true';
    const myInputs = document.querySelectorAll('input, select');
    myInputs.forEach(input => {
        input.style.backgroundColor = 'transparent';
        if(input.value === '' || input.value === 'none'){
            filed = '';
            input.style.backgroundColor = 'rgb(241, 220, 220)';
        } 
    });

    if(filed){
        checkRecipeName();
        errorMessage.innerText = '';
    } else {
        errorMessage.innerText = 'Fill all inputs before proceeding!';
        addIngredient.classList.add('animate__shakeX');
        setTimeout(()=> {
            addIngredient.classList.remove('animate__shakeX');
        },1000);
    }
    
}
function checkRecipeName(){
    let createTable = 'true';
    
    for(i in recipes){
        if(recipes[i] === recipeName.value.toLowerCase()){
            createTable = '';
        }
    }

    recipes.push(recipeName.value.toLowerCase());

    if(createTable){
        createATable();
        printIngredients();
    } else {
        printIngredients();
    } 
}
function createATable(){
    const recipeResult = document.getElementById('recipe-result');
    const h2 = document.createElement('h2');

    //Auto Capitilase first letter and make the other letters lowercase
    h2.innerText = `Recipe Name: ${recipeName.value.charAt(0).toUpperCase()}${recipeName.value.toLowerCase().slice(1)}`

    const table = document.createElement('table');
    table.innerHTML = `
    <thead>
        <tr>
            <th>Ingredients</th>
            <th>Quantity</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
    `
    recipeResult.append(h2, table);
    table.classList.add(`${recipeName.value.toLowerCase()}`);
}
function printIngredients(){
    const ingredient = document.getElementById('ingredient');
    const quantity = document.getElementById('amount');
    const weight = document.getElementById('qty-type');

    const table = document.querySelector(`.${recipeName.value.toLowerCase()}`);
    const tBody = table.lastElementChild;
    const tr = document.createElement('tr');
    tBody.append(tr);

    tr.innerHTML = 
    `
        <td>${ingredient.value}</td>
        <td>${quantity.value}${weight.value}</td>
    `
    ingredient.value = '';
    quantity.value = '';
    weight.value = 'none';
}