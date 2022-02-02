let clicked = 0;

function showSideBar() {

    clicked += 1;

    if(clicked == 1) {
        document.getElementById("side-bar").style.width = "12rem"
        document.getElementById("side-bar").style.padding = "1.5rem 2rem"
        document.getElementById("main-section").style.marginLeft = "12.5rem"
        document.getElementById("show-hide-btn").innerText = "Hide"
    } else if(clicked == 2){
        document.getElementById("side-bar").style.width = "0"
        document.getElementById("side-bar").style.padding = "0"
        document.getElementById("main-section").style.marginLeft = "0"
        document.getElementById("show-hide-btn").innerText = "Show"
        clicked = 0;
    }
}
function closeSideBar() {
    document.getElementById("side-bar").style.width = "0"
    document.getElementById("side-bar").style.padding = "0"
    document.getElementById("main-section").style.marginLeft = "0"
}