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
        name: 'Banarasi_saree',
        image: 'Banarasi_saree.jpg',
        price: 6000
    },
    {
        id: 2,
        name: 'Blouse',
        image: 'Saree-Blouse.jpg',
        price: 560
    },
    {
        id: 3,
        name: 'Lehenga',
        image: 'Lehenga.jpg',
        price: 2000
    },
    {
        id: 4,
        name: 'Gown',
        image: 'Gown.jpg',
        price: 600
    },
    {
        id: 5,
        name: 'Jacket',
        image: 'jaa.webp',
        price: 600
    },
    {
        id: 6,
        name: 'Regular panjabi',
        image: 'shu.webp',
        price: 1250
    },
    {
        id: 7,
        name: 'Men SHirt',
        image: 'shirt.webp',
        price: 1320
    },
    {
        id: 8,
        name: 'Traditional Panjabi',
        image: 'wedingpanjabi.jpg',
        price: 1530
    },
    {
        id: 9,
        name: 'Baby-Cloth',
        image: 'pexels-photo-3932934.jpeg',
        price: 4000
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
        // copy product form list to list card
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