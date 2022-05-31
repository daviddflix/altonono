const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'
export const DELETE_ITEM = 'DELETE_ITEM'
export const LINK_PAYMENT = 'LINK_PAYMENT'


const url= 'https://altonono.herokuapp.com'   

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


export function postOrder (payload){
    return async function (dispatch){
           try {                          
                const res = await axios.post(`${url}/postcompras`, payload);
                console.log('postcompras', res)
                return res
            } catch (err) {
                return console.error('algo paso',err);
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




