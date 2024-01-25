let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Girl-Top',
        image: 'j1.webp',
        price: 500
    },
    {
        id: 2,
        name: 'Top-pant',
        image: 'j2.webp',
        price: 760
    },
    {
        id: 3,
        name: 'Baby-girl cloth',
        image: 'pexels-photo-5693890.webp',
        price: 400
    },
    {
        id: 4,
        name: 'Baby-boy Suit',
        image: 'babyboy.webp',
        price: 1000
    },
    {
        id: 5,
        name: 'Party Dress',
        image: 'cloth5jpg.jpg',
        price: 5000
    },
    {
        id: 6,
        name: 'Party Dress',
        image: 'cloth4.jpg',
        price: 4250
    },
    {
        id: 7,
        name: 'Men-Blazer',
        image: 'blazer.jpg',
        price: 2320
    },
    {
        id: 8,
        name: 'Men-shirt',
        image: 'shirts-hanging-on.jpg',
        price: 530
    },
    {
        id: 9,
        name: 'Formal-suit',
        image: 'jents1.jpg',
        price: 2000
    },
    {
        id: 10,
        name: 'Dress',
        image: 'dol.webp',
        price: 1800
    },
    {
        id: 11,
        name: 'Hoodie for Ladies',
        image: 'm.webp',
        price: 1300
    },
    {
        id: 12,
        name: 'Dancing-cactus toy',
        image: 'dancing.webp',
        price: 2000
    },
    {
        id: 13,
        name: 'Backpack',
        image: 'topcard3.png',
        price: 1400
    },
    {
        id: 14,
        name: 'Men Shoes',
        image: 'topcard2.png',
        price: 1200
    },
    {
        id: 15,
        name: 'Watch',
        image: 'topcard1.png',
        price: 800
    }
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
    
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}