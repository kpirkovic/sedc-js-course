function weightInChickens (kilograms){
    return kilograms / 0.5;
}
let result = document.getElementById('result');
let myWeight = (parseFloat(prompt('What is your weight?')));
if(!isNaN(myWeight)){
    result.innerHTML = `<h3> ${myWeight}KG is as much as ${weightInChickens(myWeight)} chickens</h3>`
} else {
    result.innerHTML = `<h3>Invalid Input! Refresh to try again.</h3>`
}
