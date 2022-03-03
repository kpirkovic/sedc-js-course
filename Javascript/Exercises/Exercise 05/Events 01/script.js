const myBtn = document.getElementById('my-btn');
const myParagraph = document.getElementById('my-paragraph');

myBtn.addEventListener('click', ()=> {
    myParagraph.style.fontSize = '22px';
    myParagraph.style.fontFamily = '"Poppins", sans-serif';
    myParagraph.style.color = 'orange';
})

