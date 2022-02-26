function printList(num, element){
    let sum = 0;
    for(let i = 0; i<num.length; i++){
        sum += num[i];
        if(i + 1 == num.length){
            element.innerHTML += '<li>' + list[i] +'</li>';
        } else {
            element.innerHTML += '<li>' + list[i] + ' + ' +'</li>';
        }
    }
    element.textContent += ' = ' + sum;
}

let list = [5,3,15,12,18,22,5];
let section = document.getElementsByTagName('section')[0].firstElementChild;
printList(list, section);