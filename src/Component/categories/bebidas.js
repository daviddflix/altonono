import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { ContainerInfo, Img, MainContainer, Title,SubTitle ,Container, Buttons, ButtonAddToCart, P, CartIcon } from "./bebidasStyles";
import {v4 as uuidv4} from 'uuid';

export default function Drinks(){

    const productos = useSelector(state => state.food)


    const ItemWithAlcohol = productos[0].beverages.slice(0,5)
    const ItemWithoutAlcohol = productos[0].beverages.slice(6, 10)

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
           <h3 >ELIGE TUS BEBIDAS</h3>
           <SubTitle>Bebidas Sin Alcohol</SubTitle>
           <div>
           {
              productos? ItemWithAlcohol.map((p, i) => {
                 return(
                  <Card key={i} product={p.title} price={p.price} quantity={0} picture_url={p.picture_url}/>
                 
                 )
               }): <Loading/>
           }
           </div>
           <SubTitle>Bebidas Con Alcohol</SubTitle>
           <div>
               {
                    productos? ItemWithoutAlcohol.map((p, i) => {
                        return(
                         <Card key={i} product={p.title} price={p.price} quantity={0} picture_url={p.picture_url}/>
                        
                        )
                      }): <Loading/>
               }
           </div>
        </MainContainer>
    )
}



function Card ({ product, price, quantity, picture_url}) {

    const dispatch = useDispatch()

    const productos = useSelector(state => state.food)

   

    const [drinks, setDrinks] = useState({
        title: product,
        quantity: quantity,
        unit_price: 0,
        id: '',
        picture_url
    })

    const ProductNumberIncrement = () => {
        setDrinks(prev => ({...prev, quantity: drinks.quantity + 1 }))
       
    }
      const ProductNumberDecrement = () => {
        if(drinks.quantity === 0){
            setDrinks(prev => ({...prev, quantity: 0 }))
        } else{
            setDrinks(prev => ({...prev, quantity: drinks.quantity - 1 }))
        }
      }
  
      const AddItemsToCart = () => {
        if(drinks.quantity){
         dispatch(addItem(drinks))
         setDrinks(prev => ({...prev, quantity: 0}))
        }
     }
    
    useEffect(() => {
        const item = productos[0].beverages.filter(p => p.title===drinks.title)
        const price = item.map(p => p.price)
     
        // const totalPrice = drinks.quantity !== 0? drinks.quantity * price: 0
        setDrinks(prev => ({...prev, unit_price:price[0] , id: uuidv4()}))
   
  }, [drinks.quantity, drinks.title, productos])
  

    return(
        <Container>
        <Img src={`https://hit-pasta.herokuapp.com/${picture_url}`} />

       <ContainerInfo >
           <Title>{product}</Title>
          
           <h4 style={{margin: '0', color: '#282828'}}>${price}</h4>

                <div style={{display: 'flex', alignItems: 'center'}}>
                  <Buttons  onClick={ProductNumberDecrement}>-</Buttons>
                   <P>{drinks.quantity}</P>
                  <Buttons  onClick={ProductNumberIncrement}>+</Buttons>
               <ButtonAddToCart  onClick={AddItemsToCart} disabled={drinks.quantity === 0}> <CartIcon /></ButtonAddToCart>
               </div>
       </ContainerInfo>
       
   </Container>
    )
}