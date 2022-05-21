
import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { MainContainer, BoxOptions, BoxOptionsChild, Img, Buttons, P, CartIcon, ButtonAddToCart } from "./dessertStyles"
import {v4 as uuidv4} from 'uuid';

export default function Dessert () {

  const products = useSelector(state => state.food)
 
    return(
        <MainContainer>
       
         <h3>ELIGE TUS POSTRES</h3>
         <BoxOptions>
         {
            products? products[0].dessert.dessert.map((p, i) => {
            
               return(
                <Card key={i} 
                img={`https://hit-pasta.herokuapp.com/${p.picture_url}`}
                product={p.title}
                price={products[0].dessert.dessertPrice}
                quantity={0}
                picture_url={p.picture_url}
                />
             )
         }): <Loading/>
        }
         </BoxOptions>

      </MainContainer>

    )
}

function Card({img, product, price, quantity, picture_url}){

  const dispatch = useDispatch()
  

  const [dessert, setDessert] = useState({
    title: product,
    quantity: quantity,
    unit_price: 0,
    id: '',
    picture_url
  })
  console.log('d', dessert)

    const ProductNumberIncrement = () => {
      setDessert(prev => ({...prev, quantity: dessert.quantity + 1 }))
  }
    const ProductNumberDecrement = () => {
      if(dessert.quantity === 0){
        setDessert(prev => ({...prev, quantity: 0 }))
      } else{
        setDessert(prev => ({...prev, quantity: dessert.quantity - 1 }))
      }
    }

    const AddItemsToCart = () => {
      if(dessert.quantity){
       dispatch(addItem(dessert))
      }
    setDessert(prev => ({...prev,quantity: 0}))
   }
  

  useEffect(() => {
    
      const totalPrice = dessert.quantity !== 0? dessert.quantity * 400: 0
    setDessert(prev => ({...prev, unit_price: totalPrice, id: uuidv4()}))
 
}, [dessert.quantity])

  return(
    <BoxOptionsChild>
    <Img src={img}/>
   
   <div>

   <div>
   <h4 style={{marginTop: '.5rem', marginBottom: '.5rem'}}>{product}</h4>
    <h4  style={{margin: '0'}}>${price}</h4>
   </div>

   <div style={{display: 'flex', alignItems: 'center'}}>
     <Buttons onClick={ProductNumberDecrement}>-</Buttons>
     <P>{dessert.quantity}</P>
     <Buttons onClick={ProductNumberIncrement}>+</Buttons>
   </div>
   <ButtonAddToCart onClick={AddItemsToCart} disabled={dessert.quantity === 0}> <CartIcon /></ButtonAddToCart>
  </div>
  
 
</BoxOptionsChild>
  )
}