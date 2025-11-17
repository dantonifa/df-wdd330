//Create a h2 tag in the header in the class divider

const header = document.querySelector(".divider");
const h2 = document.createElement("h2");
h2.textContent = "Sleep Outside | Cedar Ridge Rimrock 2-person tent";
header.appendChild(h2);

// import utility functions
import {
  qs,
  getParam,
  setLocalStorage,
  getLocalStorage,
  setClick,
} from "./utils.mjs";

// get product id from url parameter
const productId = getParam("product");

// retrieve products from local storage
const products = getLocalStorage("products");

// find the product that matches the id from the url parameter
const product = products.find((item) => item.id === productId);

// populate the page with product data
qs(".product-name").textContent = product.name;
qs(".product-image").src = product.image;
qs(".product-image").alt = product.name;
qs(".product-description").textContent = product.description;
qs(".product-price").textContent = `$${product.price.toFixed(2)}`;

// add to cart functionality
setClick(".add-to-cart-button", () => {
  let cart = getLocalStorage("cart") || [];
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id: product.id, quantity: 1 });
  }
  setLocalStorage("cart", cart);
  alert(`${product.name} has been added to your cart.`);
});
