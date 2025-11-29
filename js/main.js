import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
/*Import the ProductData module into main.js and create an instance of it.*/
import ProductData from "./ProductData.mjs";
const productData = new ProductData("categoryName");
export { productData };
/*import the ProductList class as a type module*/
import { ProductList } from "./ProductList.mjs";
//Get the category from the URL query string
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");
//Get the product list container element
const productListElement = document.getElementById("product-list");
//Create an instance of ProductList
const productList = new ProductList(category, productData, productListElement);
/*make sure that you can see the list of products.*/

//Initialize the product list
productList.init();
