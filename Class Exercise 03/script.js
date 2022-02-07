function changeBg() {
    let dropDownBg = document.getElementById("bg-color-picker").value;

    document.body.className = dropDownBg;
    /* if(dropDownBg == "white"){
        document.body.style.background = "white";
        document.body.style.color = "black";
    } else if (dropDownBg == "black") {
        document.body.style.background = "#1b1717";
        document.body.style.color = "white";
    } else if (dropDownBg == "navy") {
        document.body.style.background = "#1a374b";
        document.body.style.color = "white";
    } else if (dropDownBg == "orange") {
        document.body.style.background = "#ff9a49";
        document.body.style.color = "black";
    } */
}