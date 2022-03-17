const taskInput = document.getElementById('add-task');
const addBtn = document.getElementById('add-task-btn');
const myTaskList = document.getElementById('todo-list');
const total = document.getElementById('total');
const done = document.getElementById('done');
const left = document.getElementById('left');

let counter = 0;
let doneCoutner = 0;
let leftCounter = 0;

function addTask (tasks, printTasks, printTotal){
    //pritn taskInput
    printTasks.innerHTML += 
    `<li>
        ${tasks.value}
        <input type="checkbox">
    </li>`

    //Count the tasks
    counter++;
    total.innerText = counter;
    
    //reset taskInput
    tasks.value = '';
}

function doneTask(printFinished){
    printFinished.innerText = doneCoutner;
}
function leftOverTasks(printLeft){
    leftCounter = counter - doneCoutner;
    printLeft.innerText = leftCounter;
}

addBtn.addEventListener('click', ()=>{
    if(taskInput.value === ''){
        alert('Fill the inputs before adding a task!')
    } else {
        addTask(taskInput, myTaskList, total);
        leftOverTasks(left);
    }
});

myTaskList.addEventListener('click', (e)=>{

    if(e.target.tagName == 'LI'){
        const checkbox = e.target.querySelector('input[type=checkbox]');
        
        e.target.classList.toggle('task-done');

        if(e.target.classList == 'task-done'){
            checkbox.checked = true;
            doneCoutner++;
        } else {
            checkbox.checked = false;
            doneCoutner--;
        }
        
        doneTask(done);
        leftOverTasks(left);
    }
});