/* let counter = 0;

let values = [];

while (counter < 4){
    let insertedValue = prompt(`Vnesi Broj na pozicija ${counter}:`);
    values.push(insertedValue);
    counter++;
}

console.log(values);
 */
let number = [10,50,78,1500,447,1000];
let maxNumber = 0;

let i = 0;
while(i < number.length){
    if(maxNumber < number[i]){
        maxNumber = number[i];
    }
    i++;
}

console.log(`The largest number in the array is ${maxNumber}`);

let days = [4, 2, 3, 4, 5, 6, 7];

for(let i = 0; i < days.length; i++){
    if(i % 2 == 0){
        console.log(days[i]);
    }else {
        console.log(days[i] + ", ");
    }
}

let = myNumbersList = [5,3,85,53,21,45,84,22,35,44];
for(let i = 0; i < myNumbersList.length; i++){
    if(myNumbersList[i] % 2 == 0) {
        document.write(`${myNumbersList[i]} Is Even <br>`);
    } else {
        document.write(`${myNumbersList[i]} Is Not Even <br>`);
    }
}

document.write("<br>");

for(let i = 1; i <= 20; i++){
    if(i % 2 == 0) {
        document.write(`${i} Is Even <br>`);
    } else {
        document.write(`${i} Is Not Even <br>`);
    }
}

document.write("<br>");

for(let i = 0; i < 11; i++){
    let result = i * 9;
    document.write(`Brojot ${i} * 9 = ${result} <br>`);
}

let array1 = [100,20,20,3,3];
let array2 = [100,20,20,3,3];

let sum1 = 0;
let sum2 = 0;

for(let i = 0; i < 5; i++) {
    sum1 += array1[i];
    sum2 += array2[i];
}
if(sum1 < sum2) {
    document.write(sum2 + " is Bigger");
} else if (sum1 > sum2){
    document.write(sum1 + " is Bigger");
} else {
    document.write("They are equal");
}