
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DeleteItem } from "../../redux/actions";
import Context from "../context/Items";
import { Button, ButtonClose, Container, ContainerButtonAndTitle,ContainerButtons, ButtonItemDelete ,ContainerProduct, Img, BoxNoItem, BoxItems} from "./styles";


export default function Carrito(){

  const history = useHistory()
  const {closeCart, setCloseCart} = useContext(Context);
  const dispatch = useDispatch()
  let cart = useSelector(state => state.cart);
  
 
  console.log('cart:',cart)

  const handleClic = () => {
     history.push('/productos')
     window.scroll(0,0)
  }

  const verCarrito = () => {
    history.push('/carrito')
    window.scroll(0,0)
 }


   const total = cart.map(p => p.finalPrice)
   const priceProduct =   total.reduce((prev, curr) => {
    return prev + curr 
   }, 0)
   console.log('total:',priceProduct)
   
 
 


 


    return(
     
      cart.length? <BoxItems>
         <ContainerButtonAndTitle>
            <h3>TUS PEDIDOS</h3>
            <ButtonClose onClick={() => setCloseCart(!closeCart)} />
          </ContainerButtonAndTitle>
        {
          cart.map((p, i) => {
            return(
              <Container key={i}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.picture}`} alt='picture'/>
                <ContainerProduct>
                <h6>{p.product}</h6>
                <h6>${p.price}</h6>
                </ContainerProduct>
                <ButtonItemDelete onClick={() => dispatch(DeleteItem(p.id))}>x</ButtonItemDelete>
              </Container>
            )
          })
        }
        <ContainerButtons>
         <div>
         <h4>SUBTOTAL</h4>
         <h4>{priceProduct}</h4>
         </div>
        <Button onClick={verCarrito}>VER CARRITO</Button>
        <Button>FINALIZAR COMPRA</Button>
        </ContainerButtons>
      </BoxItems> :

      
       
          <BoxNoItem>
          <ContainerButtonAndTitle>
            <h3>TUS PEDIDOS</h3>
            <ButtonClose onClick={() => setCloseCart(!closeCart)} />
          </ContainerButtonAndTitle>
      
          <div>
            <h4>NO HAY PRODUCTOS PARA MOSTRAR</h4>
            <Button onClick={handleClic}>ARMA TU HIT</Button>
          </div>
         </BoxNoItem>

      
        
        
    )
}