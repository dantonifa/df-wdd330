import { loadHeaderFooter, getParam } from "../js/utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

loadHeaderFooter();

document.addEventListener("DOMContentLoaded", async () => {
  const category = getParam("category") || "backpacks";
  const dataSource = new ProductData(category);
  const listElement = document.getElementById("productContainer");
  const productList = new ProductList(category, dataSource, listElement);
  productList.init();
});







