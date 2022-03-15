let btn = document.getElementById('addBtn');
let addTask = document.getElementById('add-task');
let list = document.getElementById('tasksList');
let counter = 1;
const notes = [];

btn.addEventListener('click', ()=>{
    printTasks(notes);
})
function printTasks(task){
    if(addTask.value == ''){
        alert('Please type something');
    } else {
        notes.push(addTask.value);
        list.innerHTML += `<li>${counter}. ${task[task.length - 1]}</li>`
        counter++; 
        addTask.value = '';
    }
}

list.addEventListener('click', (e)=>{
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }
})