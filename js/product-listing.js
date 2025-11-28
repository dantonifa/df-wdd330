import { loadHeaderFooter, getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
// Load header and footer
loadHeaderFooter();

const element = document.querySelector(".product-list");
const listing = new ProductList(category, dataSource, element);
listing.init();

// Get category from URL parameter or default to 'all'
// Create an instance of ProductData
// Create an instance of ProductList
// Initialize the product list
/*Pass the items that belong to the category chosen by the user in the index.html of main page of src: */
/*render the items on the product listing page*/
/*The above code is now located in product-listing.js*/
/*Add document.addEventListener to wait for the DOM to load before executing the code.*/
document.addEventListener("DOMContentLoaded", async () => {
  const category = getParam("category") || "all";
  const dataSource = new ProductData();
  const listElement = document.getElementById("productContainer");
  const productList = new ProductList(category, dataSource, listElement);
  productList.init();
});
  // Select the container element to display products
  // Assuming there is a div with id "productContainer" in product_listing/index.html
  // const productContainer = document.getElementById("productContainer")  
  async function renderProductList(products) {
    const productContainer = document.getElementById("productContainer");
    productContainer.innerHTML = "";
    products.forEach((product) => {
      const productCard = document.createElement("div");
      productCard.className = "product-card";
      productCard.innerHTML = `
        <img src="${product.Image}" alt="${product.NameWithoutBrand}" />
        <h3>${product.NameWithoutBrand}</h3>
        <p>Price: ${product.FinalPrice}</p>
        <a href="product-details.html?product=${product.Id}">View Details</a>
      `;
      productContainer.appendChild(productCard);
    });
  }
  renderProductList(products);
});
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) { 
    return `
    <li class="product-card">
      <a href="/product_pages/?product=${product.Id}">
        <img src="${product.Images.PrimaryMedium}" alt="${product.Name}">
        <h3>${product.Brand.Name}</h3>
        <p>${product.NameWithoutBrand}</p>
        <p class="product-card__price">$${product.FinalPrice}</p>
        </a>
    </li>
    `;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  } 
    async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
    document.querySelector(".title").textContent = this.category;
  }
    renderList(list) {
    // const htmlStrings = list.map(productCardTemplate);
    // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

    // apply use new utility function instead of the commented code above
    renderListWithTemplate(productCardTemplate, this.listElement, list);
    }
}
/*I want to populate the product_listing/index.html with the items that belong to the category chosen by the user in the index.html main page of src*/
/*how can I do it in the <ul id="productContainer"></ul> element?*/


