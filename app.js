let subnav = document.querySelector('.subnav');
let card = document.querySelector('.cards');
let box2 = document.querySelector('.box2');
let inner4 = document.querySelector('.inner4');
let last = document.querySelector('.lastbox');

// card 1
const arr = [
  {img : "image/subnav/grocery.webp", name : "Grocery"},
  {img : "image/subnav/mobile.png", name : "mobile"},
  {img : "image/subnav/fashion.png", name : "Fashion"},
  {img : "image/subnav/electrinics.png", name : "Electronics"},
  {img : "image/subnav/home.jpg", name : "Home & Furniture"},
  {img : "image/subnav/appliance.jpg", name : "Apliances"},
  {img : "image/subnav/travel.png", name : "Travel"},
  {img : "image/subnav/toys.png", name : "Beatuity & toys"},
  {img : "image/subnav/two wheels.png", name : "Two WHeelers"}
]

clutter ='';
arr.forEach(function(item){
  clutter += `
  <div class="nav-item">
        <img src="${item.img}" alt="grocery">
        <a href=""><h4>${item.name}</h4></a>
      </div>
  `
});

subnav.innerHTML = clutter;


// card 2
const cards = [
  {img : "image/items/camera.webp", name : "Camera", price : "6999"},
  {img : "image/items/keyboard.jpeg", name : "Keyboard", price : "270"},
  {img : "image/items/memory.jpeg", name : "Memory", price : "1000"},
  {img : "image/items/power bank.jpeg", name : "Power Bank", price : "2999"},
  {img : "image/items/printer.webp", name : "Printer", price : "5999"},
  {img : "image/items/projector.webp", name : "Projector", price : "4550"},
  {img : "image/items/trimmer.jpeg", name : "Trimmer", price : "999"},
  {img : "image/items/moniter.webp", name : "Moniter", price : "10999"},
  {img : "image/items/projecter.webp", name : "Projector", price : "7999"},
  {img : "image/items/router.jpeg", name : "Router", price : "1599"},
]

box ='';
cards.forEach(function(item){
  box +=`
  <div class="card-item">
  <img src="${item.img}" alt="image">
  <p>${item.name}</p>
  <h4>From ₹ ${item.price}</h4>
</div>
  `
});

card.innerHTML=box;

// card 3
const newarr = [
  {img :"image/box2/batman.jpeg", name : "Batman", discount : "70"},
  {img :"image/box2/book.jpeg", name : "Books", discount : "50"},
  {img :"image/box2/e-cycle.webp", name : "Electronic Cycle", discount : "20"},
  {img :"image/box2/food.webp", name : "Foods", discount : "40"},
  {img :"image/box2/gitar.webp", name : "Gitar", discount : "80"},
  {img :"image/box2/music-keyboard.webp", name : "Music Keyboard", discount : "55"},
  {img :"image/box2/non-gear-cycle.webp", name : "Non-Gear Cycle", discount : "35"},
  {img :"image/box2/yoga-mat.jpeg", name : "Yoga Mat", discount : "60"},
];

newbox ='';
newarr.forEach(function(item){
  newbox+= `
  <div class="card-item">
    <img src="${item.img}" alt="image">
    <p>${item.name}</p>
    <h4>Upto ${item.discount}% off</h4>
  </div>
  `
});
box2.innerHTML=newbox;

// card 4
let arr4 = [
  {img :"image/4item/casual shirts.jpeg", name : "Casual Shirts", discount : "70"},
  {img :"image/4item/hand bag.jpeg", name : "Hand Bag", discount : "40"},
  {img :"image/4item/mans t-shirt.webp", name : "Man T-shirt", discount : "80"},
  {img :"image/4item/sliper.jpeg", name : "Sliper", discount : "35"},
  {img :"image/4item/bulb.jpeg", name : "Bulb", discount : "85"},
];

it4 = '';
arr4.forEach(function(item){
  it4 += `
      <div class="inner4">
        <img src="${item.img}" alt="image">
        <p>${item.name}</p>
        <h3>Min. ${item.discount}% off</h3>
      </div>
  `
});
inner4.innerHTML=it4;

// last
let lastarr = [
  {img :"image/lastimg/anklet.jpeg", name : "Anklet", discount : "50"},
  {img :"image/lastimg/jewelery.jpeg", name : "Jewellery", discount : "20"},
  {img :"image/lastimg/man tshirt.jpeg", name : "Man T-shirt", discount : "35"},
  {img :"image/lastimg/soks.webp", name : "soks Mans & Woman", discount : "55"},
];

lbox='';
lastarr.forEach(function(item){
  lbox += `
        <div class="lbox">
          <img src="${item.img}" alt="image">
          <p>${item.name}</p>
          <h3>Min. ${item.discount}% off</h3>
        </div>
      
  `
});
last.innerHTML=lbox;