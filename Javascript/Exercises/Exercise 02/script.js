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