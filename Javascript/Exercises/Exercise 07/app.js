//Array of my fruits
const myFruits = [{
    name: 'banana',
    price: 70 
},
{
    name: 'jabolko',
    price: 65
},
{
    name: 'kivi',
    price: 35
},
{
    name: 'mandarina',
    price: 50
},
{
    name: 'portokal',
    price: 50 
},
{
    name: 'ananas',
    price: 80 
}];

//Html p element where we print our results
const myText = document.getElementById('text');

let input = prompt('Vnesi nekoe ovosje?').toLowerCase();
let inputPrice = parseFloat(prompt('Kolku kilogrami sakate da kupite?'));

for(let i = 0; i < myFruits.length; i++){
    if(myFruits[i].name === input){
        myText.innerText = `${myFruits[i].name.charAt(0).toUpperCase()}${myFruits[i].name.slice(1)} imame i negovata cena e ${myFruits[i].price * inputPrice}den za ${inputPrice}kg`;
        break;
    } 
    myText.innerText = `Ovosjeto ${input} sto go barate, momentalno go nemame na zaliha`;
};