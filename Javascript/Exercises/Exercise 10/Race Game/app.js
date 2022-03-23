const raceStartBTN = document.getElementById('race-start-btn');
const raceResetBTN = document.getElementById('race-reset-btn');

const raceElements = document.querySelectorAll('.race-el');

raceStartBTN.addEventListener('click', ()=>{
    raceStartBTN.disabled = true;
    const results = [];
    raceElements.forEach(e => {
       let randomNumber = getRandomNumber();
       e.style.left = `${randomNumber}px`;  
       e.id = `item-${randomNumber}`;
       results.push(randomNumber);
    });

    setTimeout(function(){
        const winner = getWinner(results);
        writeScore(winner.innerText);
        raceStartBTN.disabled = false;
    },400);
});

raceResetBTN.addEventListener('click', ()=>{
    raceElements.forEach(e => {
        e.style.left = `0`;  
        e.style.backgroundColor = 'cornflowerblue';
     });
     document.getElementById('score-board').innerText = '';
});

function getRandomNumber (maxNum = 750){
    return Math.floor((Math.random() * maxNum) + 1);
}

function getWinner(arr){
    let winner = findMax(arr);
    const winnerEl = document.querySelector(`#item-${winner}`);
    winnerEl.style.backgroundColor = 'gold';
    return winnerEl;
}

function writeScore(winnerNumber){
    const scoreBoard = document.querySelector('#score-board');
    scoreBoard.innerHTML += `<li><strong>${winnerNumber}</strong></li>`;
}

function findMax(arr){
    let max = arr[0];
    for(let item of arr){
        if(item > max){
            max = item;
        }
    }
    return max;
}