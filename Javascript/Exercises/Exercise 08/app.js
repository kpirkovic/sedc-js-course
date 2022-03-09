const btn = document.getElementById('btn');
const myInput = document.getElementById('input');
const myResult = document.getElementById('result');

btn.addEventListener('click', ()=>{
    printAge(myResult)
});

function printAge(element){
    const currentYear = new Date().getFullYear();
    const age = currentYear - parseFloat(myInput.value);
    element.innerText = `Vie imate ${age} godini`
}

