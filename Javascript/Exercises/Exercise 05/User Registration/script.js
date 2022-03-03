const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const error = document.getElementById('erorr');

const  myTable = document.getElementById('my-table');
const  tableHead = myTable.firstElementChild.firstElementChild;
const  tableBody = myTable.lastElementChild.firstElementChild;

const myInputs = [firstName, lastName, email, password];
const myLabels = ['First Name:', 'Last Name:', 'Email:', 'Password:'];

submit.addEventListener('click', () => {
    let count = myInputs.length;

    tableHead.innerHTML = '';
    tableBody.innerHTML = '';

    for(let list in myInputs){
        if(myInputs[list].value == ''){
            count--;
        }
        if(count === myInputs.length){

            tableHead.innerHTML += `<th>${myLabels[list]}</th>`;
            tableBody.innerHTML += `<td>${myInputs[list].value}</td>`;

            myInputs[list].value = '';
            error.innerText = '';
        } else {
            error.innerText = 'Fill all the inputs before submiting';
        }
    }
});