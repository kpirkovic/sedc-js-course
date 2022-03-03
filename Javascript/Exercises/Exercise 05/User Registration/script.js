const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');

const myUL = document.getElementById('my-ul');

const myInputs = [firstName, lastName, email, password];

submit.addEventListener('click', () => {
    console.log(firstName.value);
    for(let list in myInputs){
        myUL.innerHTML += `<li>${myInputs[list].value}</li>`;
    }
});