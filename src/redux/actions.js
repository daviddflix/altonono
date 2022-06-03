const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DELETE_ITEM = 'DELETE_ITEM'
export const LINK_PAYMENT = 'LINK_PAYMENT'
export const RESET_CART = 'RESET_CART'


const url= 'https://altonono.herokuapp.com'   
// const url2 = 'http://localhost:4000'

export function getProduct (){   
       return async function (dispatch){
          try {                            
               const res = await axios.get(url); 
                 dispatch({ type: GET_PRODUCTS, payload: res.data });
               
           } catch (error) {
               console.log('error en getproducts', error)
           }
               
       } 
    
    
 }

 export function cashPayment (payload){   
    return async function (){
       try {                            
            const res = await axios.post(`${url}/cashpayment`, payload); 
              
            
        } catch (error) {
            console.log('error en cashPayment', error)
        }
            
    } 
 
 
}



 export function getLinkPayment (payload){
    return async function (dispatch){
       try {                       
           const res =  await  axios.post(`${url}/paymentlink`,payload);
         console.log('linkpayment', res)
        return dispatch({ type: LINK_PAYMENT, payload: res.data})
          
       } catch (error) {
           return console.log('error en getlink', error);
       }
    }
       
    } 

 export function addItem(value){
   
     return{
         type:ADD_ITEM_TO_CART,
         payload: value
     }
 }

 export function DeleteItem(value){
    
    return{
        type:DELETE_ITEM,
        payload: value
    }
}

export function resetCart(){
    
    return{
        type:RESET_CART
    }
}





