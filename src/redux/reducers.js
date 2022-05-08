
import { ADD_ITEM_TO_CART, DELETE_ITEM, GET_DETAILS, GET_PRODUCTS, GET_USER } from "./actions"


const InicialState ={
  food: [],
  detail: {},
  userDetails: [],
  cart: [],
  cartFinal: []
}


 const rootReducer = (state = InicialState, action) => {
  
   if(action.type === GET_PRODUCTS){
     return{
       ...state,
       food: action.payload
     }
   }
    if(action.type === GET_DETAILS){

    return{
      ...state,
      detail: action.payload
    }
  }
  if(action.type === GET_USER){
    return{
      ...state,
      userDetails: action.payload
    }
  }
  if(action.type === ADD_ITEM_TO_CART){
   
    return{
      ...state,
      cart: [...state.cart, action.payload]
      
    }
  }

  if(action.type === DELETE_ITEM){

    const items = state.cart.filter(p => p.id != action.payload)
   
    return{
      ...state,
      cart: items
      
    }
  }
   
   else{
     return {...state}
   }

}

export default rootReducer