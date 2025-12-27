/*main.js*/
/*Import the loadHeaderFooter function from utils.mjs*/
import { loadHeaderFooter } from "js/utils.mjs";
/*call that imported function to load the header and footer */
//create an async function to load the header and footer
async function loadHeaderFooterAsync() {
 const header=document.querySelector("#main-header");
 const footer=document.querySelector("#main-footer");
 if(header && footer){
  await loadHeaderFooter();
}
}   
loadHeaderFooterAsync();
