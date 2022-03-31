const classRoomAsJson = `{
    "trainer": "Damjan Dugalikj",
    "students": [
        "Daniela",
        "Mia",
        "Simona",
        "Kosta",
        "Zarko"
    ],
    "academy":"SEDC"
}`;

console.log(classRoomAsJson)

const classRoomAsLiteral = JSON.parse(classRoomAsJson);

console.log(classRoomAsLiteral);

fetch('students.json').then(response => response.json()).then(data => console.log(data));

//Fetching and printing Cats facts

const catsBTN = document.querySelector('#cat-facts-btn');

catsBTN.addEventListener('click', ()=>{
    fetch('https://cat-fact.herokuapp.com/facts').then(response => response.json()).then(data => printCatFacts(data));
});

function printCatFacts(catFacts){
    const element = document.getElementById('cat-facts-list');
    let htmlToAdd = '';
    for(let item of catFacts){
        htmlToAdd += `<li> ${item.text} </li>`
    }
    element.innerHTML = htmlToAdd;
}

//Fetching and printing Dog images

const dogsBtn = document.querySelector('#dog-pictures-btn');

dogsBtn.addEventListener('click', ()=>{
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => printDogPictures(data));
})

function printDogPictures(dogPictures){
    const element = document.getElementById('dog-pictures');
    const img = document.createElement('img');
    const findImg = element.querySelector('img');
    if(findImg){
        findImg.remove();
    }
    img.src = dogPictures.message;
    element.appendChild(img);
    /* let htmlToAdd = `<img src='${dogPictures.message}'>`;
    element.innerHTML = htmlToAdd; */
    
}