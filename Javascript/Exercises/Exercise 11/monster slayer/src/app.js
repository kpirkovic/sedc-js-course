let monsterHealthBar = document.getElementById('monster-healthbar');
let playerHealthBar = document.getElementById('player-healthbar');

let monsterHealth = 100;
let playerHealth = 100;

let attackMonsterBtn = document.getElementById('attack-monster');
let specialAttackBtn = document.getElementById('special-attack');
let healBtn = document.getElementById('heal');
let surrenderBtn = document.getElementById('surrender');

attackMonsterBtn.addEventListener('click', attackMonster);
specialAttackBtn.addEventListener('click', specialAttack);
surrenderBtn.addEventListener('click', surrender);
healBtn.addEventListener('click', healPlayer);

let battleLog = 0;

function attackMonster(){
    const attackValue = getRandomValue(10,20);
    monsterHealth -= attackValue;
    attackPlayer();
    updateHealthBars();
    messages('Player', 'attack', attackValue);
}
function attackPlayer(){
    const attackValue = getRandomValue(8,20);
    playerHealth -= attackValue;
    messages('Monster', 'attack', attackValue);
    battleLog++;
}
function specialAttack(){
    const attackValue = getRandomValue(10,30);
    monsterHealth -= attackValue;
    attackPlayer();
    updateHealthBars();
    messages('Player', 'special attack', attackValue);
}
function healPlayer(){
    const healValue = getRandomValue(8,20);
    if(playerHealth + healValue >= 100){
        playerHealth = 100;
    } else {
        playerHealth += healValue;
    }
    attackPlayer();
    updateHealthBars();
    messages('Player', 'heals', healValue);
}
function surrender(){
    playerHealth = 0;
    updateHealthBars();
}
function getRandomValue(min, max){
    return Math.floor(Math.random() * (max - min) + min);
}
function updateHealthBars(){
    monsterHealthBar.style.width = `${monsterHealth}%`;
    playerHealthBar.style.width = `${playerHealth}%`;
    log.innerText = `${battleLog}`;
    gameStatus();
    toggleSpecialAttack();
}
function gameStatus(){
    if(playerHealth <= 0 && monsterHealth <= 0){
        monsterHealthBar.style.width = '0%';
        playerHealthBar.style.width = '0%';
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').innerHTML = `<h3>Game was a draw!</h3><button id='restart'>Play Again</button>`;
    } else if (playerHealth <= 0){
        playerHealth = 0;
        playerHealthBar.style.width = '0%';
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').innerHTML = `<h3>Monster Won!</h3><button id='restart'>Play Again</button>`;
    } else if (monsterHealth <= 0){
        monsterHealth = 0;
        monsterHealthBar.style.width = '0%';
        document.getElementById('game-over').style.display = 'block';
        document.getElementById('game-over').innerHTML = `<h3>Player Won!</h3><button id='restart'>Play Again</button>`; 
    } 
}

function toggleSpecialAttack(){
    if(battleLog % 3){
        specialAttackBtn.disabled = true;
    } else {
        specialAttackBtn.disabled = false;
    }
}

document.addEventListener('click', (e)=>{
    if(e.target.id === 'restart'){
        playerHealth = 100;
        monsterHealth = 100;
        updateHealthBars();
        document.getElementById('game-over').style.display = 'none';
        log.innerHTML = '';
        logMessages = [];
        battleLog = 0;
    }
});

let log = document.getElementById('log');
let logMessages = [];

function messages(who, what, value){
    logMessages.unshift(
        {
            actionBy: who,
            actionType: what,
            actionValue: value,
        }
    )
    log.innerHTML = '';
    logMessages.forEach(element => {
        if(element.actionBy === 'Player' && element.actionType === 'attack'){
            let li = document.createElement('li');
            let combatText = document.createElement('span');
            combatText.innerHTML = `<span class='log-player'>${element.actionBy}</span> <span class='log-damage'>${element.actionType}</span> ${element.actionValue}`;
            li.append(combatText);
            log.append(li);
        } else if(element.actionBy === 'Monster'){
            let li = document.createElement('li');
            let combatText = document.createElement('span');
            combatText.innerHTML = `<span class='log-monster'>${element.actionBy}</span> <span class='log-damage'>${element.actionType}</span> ${element.actionValue}`;
            li.append(combatText);
            log.append(li);
        } else if (element.actionBy === 'Player' && element.actionType === 'heals'){
            let li = document.createElement('li');
            let combatText = document.createElement('span');
            combatText.innerHTML = `<span class='log-player'>${element.actionBy}</span> <span class='log-heal'>${element.actionType}</span> ${element.actionValue}`;
            li.append(combatText);
            log.append(li);
        }
    });
}