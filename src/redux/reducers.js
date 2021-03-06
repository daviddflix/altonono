import storage from "redux-persist/lib/storage"
import { ADD_ITEM_TO_CART, DELETE_ITEM, GET_PRODUCTS, LINK_PAYMENT, RESET_CART, STATUS } from "./actions"


const InicialState ={
 items: [],
 cart: [],
 link: '',
 status: 'offline'
}




 const appReducer = (state = InicialState, action) => {
  
   if(action.type === GET_PRODUCTS){
     return{
       ...state,
       items: action.payload
     }
   }
 
   if(action.type === ADD_ITEM_TO_CART){
    
     const find = state.cart.find( p => p.id === action.payload.id)
     
     
     if(find){
       return {
         ...state,
          cart: state.cart.map(p => p.id === action.payload.id? {
            ...p, quantity : action.payload.quantity
          }: p)
       }
     }
    
   
    return{
      ...state,
      cart:[...state.cart, action.payload]
      
    }
  }


  if(action.type === RESET_CART){
    storage.removeItem('persist:root')
    return{
      ...state,
     cart: [],
     link: '',
     items: [],
    
    }
  }
 
 
  if(action.type === DELETE_ITEM){

    const items = state.cart.filter(p => p.id !== action.payload) 
    return{
      ...state,
      cart: items
     
    }
  }

  if(action.type === LINK_PAYMENT){ 
    return{
      ...state,
      link: action.payload
      
    }
  }
  if(action.type === STATUS){ 
    return{
      ...state,
      status: action.payload
      
    }
  }
   
   
   else{
     return {...state}
   }

}

export default appReducer


