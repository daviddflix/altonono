const axios = require('axios').default;

export const GET_PRODUCTS = 'GET_PRODUCTS'
export const NOT_FOUND = 'NOT_FOUND'
export const GET_DETAILS = 'GET_DETAILS'
export const GET_USER = 'GET_USER'
export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART'

const url = 'https://hit-pasta.herokuapp.com'


export function getProduct (){   
       return async function (dispatch){
          try {                            
               const res = await axios.get(url); 
              
               if(res.data.status === 404){
                 dispatch({ type: NOT_FOUND, payload: true });
               } else {
                 dispatch({ type: GET_PRODUCTS, payload: res.data });
               }
           } catch (err) {
                dispatch({ type: NOT_FOUND, payload: true });
           }
               
       } 
    
    
 }

 export function getDetail(id){
    return async function (dispatch){ 
       const data = await fetch(`${url}/detail/${id}`)
       const info = await data.json()
       return dispatch({ type: GET_DETAILS, payload: info })
    }        
 }

 export function postUser (payload){
  return async function (dispatch){
         try {                          
              const res = await axios.post(`${url}/user`, payload);
              return res
          } catch (err) {
              return console.error('algo paso',err);
          }
              
      } 
   
   
} 

 

 export function getUser  (){
 return async function (dispatch){
    try {                       
        const res =  await  axios.get(`${url}/getUser`);
       
        return dispatch({ type: GET_USER, payload: res })
    } catch (err) {
        return console.error(err);
    }
 }
    
 } 


 export function addItem(value){
    
     return{
         type:ADD_ITEM_TO_CART,
         payload: value
     }
 }




