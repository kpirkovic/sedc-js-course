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
        return `The greater number of ${x} and ${y} is ${x}`;
    } else {
        return `The greater number of ${x} and ${y} is ${y}`;
    }
}

let result = greaterNum(35, 20);

console.log(result);


//Second Solution

function greaterNumber(x, y) {
    if(x > y){
        return x; 
    } else if (y > x){
        return y;
    }  else if (y == x){
        return 'they are equal';
    } else {
        return 'incorrect input';
    }
}

let num = [25, 25];
let results = greaterNumber(num[0], num[1]);

console.log(`The greater number of ${num[0]} and ${num[1]} is ${results}`);

//Grade Checker

function assingGrade(score) {

    if(score >= 90) {
        return 'A and you passed the exam.';
    } else if (score >= 85) {
        return 'B and you passed the exam.';
    } else if (score >= 75) {
        return 'C and you passed the exam.';
    } else if (score >= 65) {
        return 'D and you passed the exam.';
    } else if (score >= 50) {
        return 'E and you passed the exam.';
    } else {
        return 'F and you faild the exam.';
    }

}

let studentScore = 89;
let grade = assingGrade(studentScore);

console.log(`You have ${studentScore} points which means, your grade is ${grade}`);