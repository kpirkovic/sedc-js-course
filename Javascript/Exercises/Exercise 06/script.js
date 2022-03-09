const generateBTN = document.getElementById('btn');
const printBTN = document.getElementById('print-cars');
const cars = [];

function Cars (model, color, year, fuel){
    this.model = model;
    this.color = color;
    this.year = year;
    this.fuel = fuel;
    this.fuelConsumption = function (liters, kilometers){
        return kilometers / liters;
    }
}
function createObject(){
    console.log('Works')
    const modelInput = document.getElementById('model').value;
    const yearInput = document.getElementById('year').value;
    const colorInput = document.getElementById('color').value;
    const fuelInput = document.getElementById('fuel').value

    cars.push(new Cars(modelInput, colorInput, yearInput, fuelInput));

    const inputs = document.querySelectorAll('input');
    inputs.forEach((e) => {
        e.value = '';
    });
}

generateBTN.addEventListener('click', ()=>{
    createObject();
    alert('We generated a car based on your inputs');
}); 

printBTN.addEventListener('click', ()=> {
    printCars(cars);
})

function printCars(list) {
    list.forEach((e) => {
        printObject(e);
    });
}

function printObject(object) {
    const kilometers = document.getElementById('kilometers').value;
    const liters = document.getElementById('liters').value;
    let p = document.createElement('p');
    p.classList.add('my-p');

    document.getElementsByTagName('section')[0].appendChild(p);

    p.innerHTML = `The model is ${object.model}, it is this <span>Color</span>, it's ${new Date().getFullYear() - object.year} years old. ${object.model} spends ${object.fuelConsumption(liters, kilometers)}`;

    span = p.getElementsByTagName('span')[0].style.color = object.color;
}
