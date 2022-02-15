
function meetersConverter(){
    const feet = document.getElementById("feet").value;
    const meeters = document.getElementById("results-meters");
    const result = feet * 0.3048;

    meeters.textContent = "Meeters = " + result;
    document.getElementById("feet").value = "";
}

function calculateArea(){
    const printArea = document.getElementById("area")
    const printPerimetar = document.getElementById("perimetar")
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    const area = width * height;

    printArea.textContent = "Area = " + area;
    document.getElementById("area").value = "";
}

function calculateCircleArea() {
    const circleArea = document.getElementById("circle-radius").value;
    const printCricleArea = document.getElementById("circle-area");
    const circleAreaResult = 3.141 * circleArea * circleArea ;

    printCricleArea.textContent = "Circle Area = " + circleAreaResult;
    document.getElementById("circle-area").value = "";
}