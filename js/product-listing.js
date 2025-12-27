/*product-listing.js*/
// Import necessary modules using correct relative paths
import { loadHeaderFooter, getParam } from "../js/utils.mjs";
import ProductData from "./js/ProductData.mjs";
import ProductList from "./js/ProductList.mjs";
/*get the header and footer*/
// Call the function directly; it handles its own async logic
loadHeaderFooter(); 



document.addEventListener("DOMContentLoaded", async () => {
  // Get category from query parameter; default if not present
  // getParam() is now available because it's imported from utils.mjs
  const category = getParam("category") || "backpacks";
  // Show the category name in the section headline
  // Make sure you have an element with class="title" in your HTML
  const titleElement = document.querySelector(".title");
  if (titleElement) {
    titleElement.textContent = category;
  }
  // Set up the data source and product list renderer
  // ProductData is now available because it's imported
  const dataSource = new ProductData(category);
  // Make sure you have an element with id="productContainer" in your HTML
const listElement = document.getElementById("productContainer");
if (listElement) {
      // ProductList is now available because it's imported
      const productList = new ProductList(category, dataSource, listElement);
    
      // Render the product list for the chosen category
      await productList.init();
  } else {
      console.error("The 'productContainer' element was not found in the HTML.");









