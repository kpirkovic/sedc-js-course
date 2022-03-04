const tRows = document.getElementById('rows');
const tColums = document.getElementById('colums');

const printBTN = document.getElementById('print-btn');

let tBody = document.getElementById('t-body');

printBTN.addEventListener('click', ()=>{
    printTable();
});

//when pressing enter run a function
window.addEventListener("keyup", (e)=> {
    if (e.keyCode === 13) {
      printTable();
    }
});

function printTable(){
    if(tRows.value !== '' && tColums.value != ''){
        tBody.innerHTML = '';

        //takes the input from Row value
        let numberOfRows = tRows.value;

        //prints the give input values from Row
        for(let i = 0; i < numberOfRows; i++){
            tBody.innerHTML += `<tr></tr>`;
        }

        //finds all the <tr> in tBody
        let td = tBody.querySelectorAll('tr');

        //find me the ling of the rt
        let foundTr = td.length;

        //prints the values that it takes from the input
        let numberOfColums = tColums.value;

        for(let j = 0; j < foundTr; j++){
            //print the colums from the input
            for(let k = 0; k < numberOfColums; k++){
                td[j].innerHTML += `<td>Row ${j + 1} x Col ${k + 1}</td>`;
            }
        }
    } else {
        alert('Fill all the inputs before submiting');
    }
}
