function showSideBar() {
    document.getElementById("side-bar").style.width = "12rem"
    document.getElementById("side-bar").style.padding = "1.5rem 2rem"
    document.getElementById("main-section").style.marginLeft = "12.5rem"
}
function closeSideBar() {
    document.getElementById("side-bar").style.width = "0"
    document.getElementById("side-bar").style.padding = "0"
    document.getElementById("main-section").style.marginLeft = "0"
}