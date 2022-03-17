const users = ["admin@sedc.com", "student@sedc.com", "user@sedc.com", "tester@sedc.com"];
const passwords = ["admin123", "student123", "user123", "tester123"];

const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

const loginStatus = document.getElementById('login-status');

const loginBtn = document.getElementById('login-btn');

function checkInputs(username, password, printElement, userInput, passInput){
    //Check inputs length
    if(userInput.value.length < 3 || passInput.value.length < 5){
        alert('Fill the inputs according to the place holder text')
    } else {
        //Check inputs informations
        let foundUsername = new Boolean(false);
        let foundPass = new Boolean(false);
        for(let i = 0; i < username.length; i++){
            if(username[i] === userInput.value){
                foundUsername = true
            }
        }
        for(let i = 0; i < password.length; i++){
            if(password[i] === passInput.value){
                foundPass = true
            }
        }
        if(foundUsername === true && foundPass === true){
            printElement.innerText = 'Success!'
            printElement.style.color = 'green';
        } else {
            printElement.innerText = 'Error!'
            printElement.style.color = 'red';
        }
    }
    //Reset the inputs
    userInput.value = '';
    passInput.value = '';
}

loginBtn.addEventListener('click', ()=>{
    checkInputs(users, passwords, loginStatus, usernameInput, passwordInput);
});
