import {renderOrderSummary} from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts,loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js';
// import '../data/backend-practice.js';

async function loadPage(){
    try{
        //throw 'error'
     await loadProductsFetch();
    const value= await new Promise((resolve,reject)=>{
        //throw 'error'; first way to create error in promise use in synchrounous code
     loadCart(()=>{
   // reject('error')  //second way to create error in the future use in asynchronous code
     resolve('value3');
        })
    })
    } catch(error){
        console.log('Unexpected error. Please try again later');
    }
   

      renderOrderSummary();
       renderPaymentSummary();
}
loadPage();

/*
Promise.all([
  loadProductsFetch(),

new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })

]).then((values)=>{
    console.log(values);
       renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
new Promise((resolve)=>{
    loadProducts(()=>{
        resolve('value1');
    })

    }).then((value)=>{
    return new Promise((resolve)=>{
        loadCart(()=>{
            resolve();
        })
    })

    }).then(()=>{
     renderOrderSummary();
    renderPaymentSummary();
 });
 */
/*
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})
  */
