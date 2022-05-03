import { GET_PRODUCTS } from "./actions"


const InicialState ={
  food: []
}


 const rootReducer = (state = InicialState, action) => {
   console.log('reducer')
   if(action.type === GET_PRODUCTS){
     return{
       ...state,
       food: action.payload
     }
   } else{
     return {...state}
   }

}

export default rootReducer