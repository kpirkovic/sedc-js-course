let cars = ["BMW", "Mercedes", "Passat", "Honda", "Porche"];
//Returns the second Item in the array which is Mercedes
console.log(cars[1]);

//Returns the last Item in the array which is Mercedes
let lastElement = cars[cars.length - 1];
console.log(lastElement);

//Adds an element to the end of an array
cars.push("Ferrari");
console.log(cars);

//Returns the numbers of elements in the array
console.log(cars.length);

//Add an elements to position 2 and shift the other elements
cars.splice(2, 0, "Yugo");
console.log(cars);

//Add an elements to position 1 and shifts the first element to the last position
cars.splice(1, 0, "Yugo");
let firstElement = cars.shift(0);
cars.push(firstElement);
console.log(cars);