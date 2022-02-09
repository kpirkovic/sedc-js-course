function addToDo () {
    let myGoals = document.getElementById("goals-input").value;
    if(myGoals === "") 
    {
       alert("Write a goal before you click the Add Button")
    } else {
        document.getElementById("input-wraper").innerHTML += 
        "<div id='todo-wraper'>"
        + "<button id='complete-btn'></button>" 
        + "<span>" + myGoals + "</span>" 
        + "</div>"

        document.getElementById("goals-input").value = "";
    }
}
function removeToDo (){
    
}