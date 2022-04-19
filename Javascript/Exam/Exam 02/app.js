function Store(name){
    this.name = name;
    this.products = [];
    this.card = [];
    this.wishlist = [];

    this.addProduct = function(product){
        this.products.push(product);
        this.listProducts();
    }
    this.listProducts = function(){
        const booksList = document.getElementById('books-list');
        let htmlToAdd = '';
        const btns = 
        `
        <div class="card-actions"> 
            <button class="buy-btn btn buy"> buy </button> 
            <button class="wishlist-btn btn"> add to wishlist </button>
        </div>
        `
        this.products.forEach(item => {
            htmlToAdd +=     
            `
                <li id="${item.id}" class="card">
                    <div class="card-title">${item.title}</div>
                    <div class="card-img"> <img src="${item.coverUrl}"> </div>
                    <div class="card-description">${item.description}</div>
                    <div class="card-price"> Price: ${item.price} den.</div>
                    <div class="card-quantity"> Quantity: ${item.qty} </div>
                    ${item.qty > 0 ? btns : ''}
                </li>
            `
        })
        booksList.innerHTML = htmlToAdd;
    }
    this.addToCard = function(id){
        const el = this.products.find(x => x.id === id);

        if(el){
            el.qty--;
            this.listProducts();
            this.card.push(el);
            this.listCard();
        }
    }
    this.listCard = function(){
        const cardList = document.getElementById('shopping-card');
        let htmlToAdd = '';
        let index = 0;

        this.card.forEach(item => {
            htmlToAdd +=     
            `
                <li id="${item.id}">${item.title} ${item.author} ${item.price} den<a href="#" class="remove-book-card" id="${index++}"> remove </a></li>
            `
        })
        cardList.innerHTML = htmlToAdd;
    }
    this.removeCard = function(index, id){

        this.card.splice(index, 1);
        this.listCard();

        const el = this.products.find(x => x.id === id);

        if(el){
            el.qty++;
            this.listProducts();
        }
    }
    this.addToWishlist = function(id){
        const el = this.products.find(x => x.id === id);

        if(el){
            this.wishlist.push(el);
            this.listWishlist();
        }
    }
    this.listWishlist = function(){
        const wishlist = document.getElementById('wishlist');
        let htmlToAdd = '';
        let index = 0;

        this.wishlist.forEach(item => {
            htmlToAdd +=     
            `
                <li id="${item.id}">${item.title} ${item.author} ${item.price} den<a href="#" class="remove-wishlist" id="${index++}"> remove </a></li>
            `
        })
        wishlist.innerHTML = htmlToAdd;
    }
    this.removeWishlist = function(index){
        this.wishlist.splice(index, 1);
        this.listWishlist();
    }
}

const myStore = new Store('Moja Prodavnica');

function Book(title, author, coverUrl, price, qty, description){
    this.id = Date.now();
    this.title = title;
    this.author = author;
    this.coverUrl = coverUrl;
    this.price = price;
    this.qty = qty;
    this.description = description;
}

document.addEventListener('click', (e)=>{
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const coverUrl = document.getElementById('cover').value;
    const price = document.getElementById('price').value;
    const qty = document.getElementById('quantity').value;
    const description = document.getElementById('description').value;

    if(e.target.id == 'add-btn'){
        myStore.addProduct(new Book(title, author, coverUrl, price, qty, description));
    } else if(e.target.classList.contains('buy-btn')){
        const id = parseInt(e.target.closest('li').id);
        myStore.addToCard(id);
    } else if(e.target.classList.contains('remove-book-card')){
        const id = parseInt(e.target.closest('li').id);
        const index = parseInt(e.target.closest('a').id);
        myStore.removeCard(index, id);
    } else if(e.target.classList.contains('wishlist-btn')){
        const id = parseInt(e.target.closest('li').id);
        myStore.addToWishlist(id);
    } else if(e.target.classList.contains('remove-wishlist')){
        const index = parseInt(e.target.closest('a').id);
        myStore.removeWishlist(index);
    }
})
