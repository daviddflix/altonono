
import { ADD_ITEM_TO_CART, GET_DETAILS, GET_PRODUCTS, GET_USER } from "./actions"


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


    
    // const filterItem =  state.cartFinal?.filter(p => p.id === action.payload.id && action.payload)
   
   
    return{
      ...state,
      cart: [...state.cart, action.payload]
      // cartFinal: [...state.cartFinal,filterItem]
      
    }
  }
   
   else{
     return {...state}
   }

}

export default rootReducer