//Gets the first div
let myFirstDiv = document.getElementById('first');

console.log(myFirstDiv);

//Gets all paragraphs
let allParagraphs = document.getElementsByTagName('p');

console.log(allParagraphs);

//Gets the last div
let myLastDiv = document.getElementsByClassName('anotherDiv')[0].nextElementSibling;

console.log(myLastDiv);

//Gets the header in the last div
let header3 = myLastDiv.lastElementChild; 

console.log(header3);

//Gets the header in the last div
let header1 = header3.previousElementSibling;

console.log(header1);

//Get the text from the first paragraph in the second div
let paragraphTXT = document.getElementsByClassName('second')[0];

console.log(paragraphTXT);

//Add the word "text" to the text element in the second div
let text = paragraphTXT.nextElementSibling.textContent = "text";

//Change the text of the header 1 in the last div
header1.textContent = "This is a new Text"

//Change the text of the header 3 in the last div 
header3.textContent = "Changed this using code"