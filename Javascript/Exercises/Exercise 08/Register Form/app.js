// DOM -  get the inputs and other elements
const register = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");
const fullName = document.querySelector("#name");
const userName = document.querySelector("#username");
const pass = document.querySelector("#pass");
const repass = document.querySelector("#repass");
const createBtn = document.querySelector("#create-btn");
const result = document.querySelector("#result");
const loginInfo = [];
const lUserInput = document.getElementById('l-user');
const lPassInput = document.getElementById('l-pass');
const loginResult = document.getElementById('loginResult');

// check for errors in input
function checkInputs(){
    let errors = [];
    if(userName.value.length < 3){
        errors.push("username must contain more than 2 characters"); // add the errors to our error string
    } if(pass.value.length < 5){
        errors.push("Password must contain more than 5 characters"); // add the errors to our error string
    } if(pass.value !== repass.value){
        errors.push("Passwrods must match"); // add the errors to our error string
    }
    return errors.length > 0 ? errors : []; // checks and returns either an empty array or array with elements that describe the error
}

// print the array of errors
function printErrors(errors){
    result.innerHTML = "";
    for(let error of errors){
        result.innerHTML += `<li>${error}</li>`;
    }
}

// create an event listener
createBtn.addEventListener('click', () => {
    if(checkInputs().length > 0){
        printErrors(checkInputs());
    } else {
        loginInfo.push(userName.value, pass.value);
        register.style.display = "none";
        loginForm.style.display = "block";
    }
});

// event delegation
document.addEventListener("click", (e) => {
    if(e.target.id === "login-btn"){
        logInCheck(loginInfo, lUserInput.value, lPassInput.value);
    }
});

function logInCheck(info, username, password){
    if(info[0] == username && info[1] == password){
        loginResult.innerText = 'Your login was successful';
    } else {
        loginResult.innerText = 'Username or password is incorrect';
    }
}



