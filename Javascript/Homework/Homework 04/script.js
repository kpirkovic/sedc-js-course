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

            let td = tBody.querySelectorAll('tr');

            let numberOfColums = tColums.value;

            for(let j = 0; j < numberOfColums; j++){
                td[i].innerHTML += `<td>Row ${i + 1} x Col ${j + 1}</td>`;
            }
        }
        
    } else {
        alert('Fill all the inputs before submiting');
    }
}
