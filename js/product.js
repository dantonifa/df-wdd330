import { getParam, loadHeaderFooter } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();
const dataSource = new ProductData("tents");
const productId = getParam("product");
const product = new ProductDetails(productId, dataSource);
console.log(dataSource.findProductById(productId));
product.init();
/*Get the product parameter, the product id, from the URL using the helper function getParam.*/
export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get("product");
  const params = new URLSearchParams(window.location.search);
  const productId= urlParams.get("productId");
  return params.get(param);
}
/*Create an instance of ProductDate data class with the URL 
it should use to look for products.*/
