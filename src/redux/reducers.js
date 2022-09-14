import { ADD_ITEM_TO_CART, CLEAR_DETAIL, DELETE_ITEM, DETAILS, FILTER, GET_PRODUCTS, HISTORY, LINK_PAYMENT, RESET_CART, STATUS, SUSTRACT_TO_CART } from "./actions"


const InicialState ={
 items: [],
 cart: [],
 link: '',
 status: [],
 history:[],
 detail: {}
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
            ...p, quantity : p.quantity + 1
          }: p)
       }
     }
    
   
    return{
      ...state,
      cart:[...state.cart, action.payload]
      
    }
  }

  if(action.type === HISTORY){
    return{
      ...state,
      history: action.payload
    }
  }

  if(action.type === SUSTRACT_TO_CART){
    const find = state.cart.find( p => p.id === action.payload.id)
     
     if(find && find.quantity > 1){
       return {
         ...state,
          cart: state.cart.map(p => p.id === action.payload.id? {
            ...p, quantity : p.quantity - 1
          }: p)
       }
     }
     if(find && find.quantity === 1){
      return {
        ...state,
         cart: state.cart.filter(p => p.id !== action.payload.id) 
      }
    }
     
   

  }


  if(action.type === RESET_CART){
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
  if(action.type === DETAILS){

    
    return{
      ...state,
      detail: action.payload
     
    }
  }
  if(action.type === DETAILS){

    
    return{
      ...state,
      detail: action.payload
     
    }
  }

  if(action.type === FILTER){

    
    return{
      ...state,
      items: action.payload
     
    }
  }

  if(action.type === CLEAR_DETAIL){

    
    return{
      ...state,
      detail: {}
     
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


