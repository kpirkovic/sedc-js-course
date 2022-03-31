function Store(name){
    this.name = name;
    this.products = [];
    this.shoppingCartProducts = [];

    this.addProduct = function(product){
        this.products.push(product);
    }

    this.listProducts = function(){
        const el = document.querySelector('#products');
        let htmlToAdd = '';
        let index = 0;

        for(let item of this.products){
            htmlToAdd += 
            `<li data-index='${index}'>
                <h4>Name: ${item.name}</h4>
                <div><img width='200px' src='${item.imageUrl}'</img></div>
                <div>Price: ${item.price} denari</div>
                <div id='Quantity'>Quantity: ${item.quantity}</div>
                <div>Description: ${item.description}</div>
                <div>Compare: <input type='checkbox' class='compare-chk'></div>
                <div><button class='add-cart-btn'>Add to Cart</button></div>
            </li>`
            index++;
        }
        el.innerHTML = htmlToAdd;
        
    }
    this.addToCart = function(product){
        this.shoppingCartProducts.push(product);
        this.listProductsInShoppingCart();
    }
    this.listProductsInShoppingCart = function(){
        const el = document.getElementById('shopping-cart');
        let htmlToAdd = '';
        for(let item of this.shoppingCartProducts){
            htmlToAdd += 
            `<li'>
                <h5>Name: ${item.name} = ${item.price}</h5>
            </li>`
            el.innerHTML = htmlToAdd;
        }
    }
    this.compareProducts = function(product1, product2){
        const el = document.getElementById('compare');

        el.innerHTML = 
        `
            <table>
                <tr>
                    <th>${product1.name}</th>
                    <th>${product2.name}</th>
                </tr>
                <tr>
                    <td><img src='${product1.imageUrl}' width='60'></td>
                    <td><img src='${product2.imageUrl}' width='60'></td>
                </tr>
                <tr>
                    <td class='${product1.price < product2.price ? 'cheaper-product' : ''}'>${product1.price}</td>
                    <td class='${product2.price < product1.price ? 'cheaper-product' : ''}'>${product2.price}</td>
                </tr>
                <tr>
                    <td>${product1.description}</td>
                    <td>${product2.description}</td>
                </tr>
            </table>
        `;
    }

    this.getProductByIndex = function(index){
        let product = this.products[index];
        if(product){
            return product;
        } else {
            return false;
        }
    }

    this.calculateQuanitity = function(product){
        product.quantity--
        if(product.quantity <= 0){
            return 0;
        } else {
            return product.quantity;
        }
    }
}

function Product(name, price, imageUrl, description, quantity){
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.quantity = quantity;
}

const tvSamsung = new Product('SAMSUNG UE75AU7172UXXH', 27999, 'https://setec.mk/image/cache/catalog/Product/50744_0-600x600.jpg', '"75" (189cm) UltraHD Smart телевизор', 5);
const tvPhilips = new Product('PHILIPS 50PUS750', 26500, 'https://setec.mk/image/cache/catalog/Product/52189_0-600x600.jpg', '"50" (126cm) Ultra Slim UltraHD Smart LED телевизор', 5);
const tvSony = new Product('SONY XR50X90JCEP', 66999, 'https://setec.mk/image/cache/catalog/Product/74361_0-600x600.jpg', '"50" (123cm) 4K UltraHD Google LED TV', 7);

const myStore = new Store('Sedc Store');

myStore.addProduct(tvPhilips);
myStore.addProduct(tvSamsung);
myStore.addProduct(tvSony);

myStore.listProducts();

const addCartBtn = document.getElementById('add-cart-btn');

document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('add-cart-btn')){
        const productIndex = parseInt(e.target.closest('li').getAttribute('data-index'))
        const product = myStore.getProductByIndex(productIndex);
        
        if(product){
            const productQuanitity = e.target.closest('li').querySelector('#Quantity');
            const quantity = myStore.calculateQuanitity(product); 
            productQuanitity.innerText = `Quantity: ${quantity}`
            if(quantity <= 0){
                productQuanitity.style.color = 'red';
            } else {
                myStore.addToCart(product);
            }
        }
    }
});

let productsToCompare = [];
document.addEventListener('click', (e)=>{
    if(e.target.classList.contains('compare-chk')){
        const productIndex = parseInt(e.target.closest('li').getAttribute('data-index'));
        e.target.disabled = true;
        const product = myStore.getProductByIndex(productIndex);
        if(productsToCompare.length < 3){
            productsToCompare.push(product);
        }
        if(productsToCompare.length === 2){
            myStore.compareProducts(productsToCompare[0], productsToCompare[1]);
            productsToCompare = [];
            uncheckCompareInputs();
        }
    }
});

function uncheckCompareInputs(){
    inputs = document.querySelectorAll('.compare-chk');
    for(let item of inputs){
        item.checked = false;
        item.disabled = false;
    }
}
