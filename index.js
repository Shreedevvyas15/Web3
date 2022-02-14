// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
const cartBtn = document.querySelector('.cart-btn');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('clear-cart');

const cartDom = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartItems = document.querySelector('.cart-items');
const cartTotal = document.querySelector('.cart-total');

const cartContent = document.querySelector('.cart-content');
const prouduction = document.querySelector('.products-center');

//
let cart = [];

//getting the products
class Products {
  getProucts(){
    fetch('products.json')
  }

}
//display products

class UI {

}
//local storage
document.addEventListener("DOMContentLodded",()=>{
const ui = new UI()
const products = new Products();  
})