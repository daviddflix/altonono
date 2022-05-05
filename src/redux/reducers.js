import { GET_DETAILS, GET_PRODUCTS } from "./actions"


const InicialState ={
  food: [],
  detail: {}
}


 const rootReducer = (state = InicialState, action) => {
   console.log('reducer')
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
   
   else{
     return {...state}
   }

}

export default rootReducer