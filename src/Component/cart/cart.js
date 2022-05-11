
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DeleteItem } from "../../redux/actions";
import Context from "../context/Items";
import { Button, ButtonClose,  Container, ContainerButtonAndTitle,ContainerButtons, ButtonItemDelete ,ContainerProduct, Img, BoxNoItem, BoxItems} from "./styles";
import { useAuth0 } from "@auth0/auth0-react";

export default function Carrito(){

  const {isAuthenticated , loginWithRedirect } = useAuth0();
  const history = useHistory()
  const {closeCart, setCloseCart} = useContext(Context);
  const dispatch = useDispatch()
  let cart = useSelector(state => state.cart);
  
 
  console.log('cart:',cart)

  const handleClic = () => {
     history.push('/productos')
     window.scroll(0,0)
     setCloseCart(!closeCart)
  }

  const verCarrito = async() => {
    if(isAuthenticated){
      history.push('/carrito')
      window.scroll(0,0)
      setCloseCart(!closeCart)
    } 
    await loginWithRedirect()
   
 }


   const total = cart.map(p => p.unit_price)
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
        {/* <ContainerProductGeneral> */}
        {
          cart.map((p, i) => {
            return(
              <Container key={i}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.image}`} alt='picture'/>
                <ContainerProduct>
                <h5>{p.product}</h5>
                <h6>${p.price}</h6>
                </ContainerProduct>
                <ButtonItemDelete onClick={() => dispatch(DeleteItem(p.id))}>x</ButtonItemDelete>
              </Container>
            )
          })
        }
        {/* </ContainerProductGeneral> */}
        <ContainerButtons>
         <div style={{display: 'flex', justifyContent: 'space-around'}}>
         <h4>SUBTOTAL</h4>
         <h4>${priceProduct}</h4>
         </div>
        <Button onClick={verCarrito}>VER CARRITO</Button>
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