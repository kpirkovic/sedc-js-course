//Functions Exercise
function celsiusToFahrenheit(temp) {
    let temperature = temp * 9 / 5 + 32;
    return temperature;
}

let celsius = 39;
let celsiusCalculator = celsiusToFahrenheit(celsius);
console.log(`NN°C ${celsius} is ${celsiusCalculator} NN°F`);

function fahrenheitToCelsius(temp) {
    let temperature = (temp - 32) * 5 / 9;
    return temperature;
}
let fahrenheit = 102.2;
let fahrenheitCalculator = fahrenheitToCelsius(fahrenheit);
console.log(`NN°F ${fahrenheit} is ${fahrenheitCalculator} NN°C`);


//If statments Exercise

let fridayCash = 10;

if (fridayCash >= 50) {
    console.log(`You should go out for dinner and movie`);
} else if (fridayCash  >=35) {
    console.log(`You should go out for dinner and movie`);
} else if (fridayCash  >=12) {
    console.log(`You should see a movie`);
} else {
    console.log(`Looks like you'll be watching TV`);
}

//Check greater number and return the highest

function greaterNum(x, y) {
    if(x > y){
        return `The greater number of ${x} and ${y} is ${x}` 
    } else {
        return `The greater number of ${x} and ${y} is ${y}`
    }
}

let result = greaterNum(35, 20);

console.log(result);


//Second Solution

function greaterNumber(x, y) {
    if(x > y){
        return x; 
    } else {
        return y;
    }
}

let num = [38, 25];
let results = greaterNumber(num[0], num[1]);

console.log(`The greater number of ${num[0]} and ${num[1]} is ${results}`);