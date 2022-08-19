const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const SUSTRACT_TO_CART = 'SUSTRACT_TO_CART'
export const DELETE_ITEM = 'DELETE_ITEM'
export const LINK_PAYMENT = 'LINK_PAYMENT'
export const RESET_CART = 'RESET_CART'
export const STATUS = 'STATUS'
export const HISTORY = 'HISTORY'
export const DETAILS = 'DETAILS'
export const CLEAR_DETAIL = 'CLEAR_DETAIL'



const url= process.env.REACT_APP_URL

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
    return async function (dispatch){
       try {                            
            const res = await axios.post(`${url}/cashpayment`, payload); 
            console.log('res', res)
            dispatch({ type: HISTORY, payload: res.data });
            
        } catch (error) {
            console.log('error en cashPayment', error)
        }
            
    } 
 
 
}

export function getStatus (){
    return async function (dispatch){
       try {                       
           const res =  await  axios(`${url}/getStatus`);
        return dispatch({ type: STATUS, payload: res.data})
          
       } catch (error) {
           return console.log('error en getSatus', error);
       }
    }
       
} 

export function detail (id){
    return async function (dispatch){
       try {                       
           const res =  await  axios(`${url}/details/${id}`);
        return dispatch({ type: DETAILS, payload: res.data})
          
       } catch (error) {
           return console.log('error en detail', error);
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
   console.log('value', value)
     return{
         type:ADD_ITEM_TO_CART,
         payload: value
     }
 }

 export function sustractItem(value){
   
    return{
        type:SUSTRACT_TO_CART,
        payload: value
    }
}

export function SustractItem(value){
   
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

export function clearDetail(){
    
    return{
        type:CLEAR_DETAIL
    }
}








