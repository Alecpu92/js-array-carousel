// dichiarazione array con immagini
const images_array = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

let item_content = '';

// ciclizzazione carosello
for (let i = 0; i < images_array.length; i++) {
    item_content += `<div class="item"><img src="./img/${ images_array[i] }"></div>`
};

// dichiarazioni costanti prese da classi 
const items_slider = document.querySelector('.item-slider').innerHTML = item_content;
const items = document.getElementsByClassName('item');
const circles = document.getElementsByClassName('circle');



let item_active = 0;

items[item_active].classList.add('active');
circles[item_active].classList.add('active');

// dichiarazione freccette 
let next = document.querySelector('.dopo');
let prev = document.querySelector('.prima');

// funzione al click
next.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    

    if ( item_active === images_array.length-1 ) {
        item_active = 0;
    }
    else {
        item_active++;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    
});

prev.addEventListener ('click', function() {

    items[item_active].classList.remove('active');
    circles[item_active].classList.remove('active');
    

    if ( item_active === 0 ) {
        item_active = images_array.length - 1;
    }
    else {
        item_active--;
    };

    items[item_active].classList.add('active');
    circles[item_active].classList.add('active');
    
});
