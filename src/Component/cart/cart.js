
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { DeleteItem } from "../../redux/actions";
import Context from "../context/Items";
import { Button, ButtonClose,  Container, P, H5, H6, ContainerButtonAndTitle,ContainerButtons, ContainerButtonAndTitleRelative,  ButtonItemDelete ,ContainerProduct, Img, BoxNoItem, BoxItems, ContainerSubtotal} from "./styles";
import { useAuth0 } from "@auth0/auth0-react";
import CurrencyFormat from 'react-currency-format';

export default function Carrito(){

  const {isAuthenticated , user, loginWithRedirect } = useAuth0();
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
    if(user){
      history.push('/carrito')
      window.scroll(0,0)
      setCloseCart(!closeCart)
    } else {
      loginWithRedirect()
    }
   
 }


   const total = cart.map(p => p.unit_price)
   const priceProduct =   total.reduce((prev, curr) => {
    return prev + curr 
   }, 0)

   
 const CartFilter = cart.slice(0, 5)
 


 


    return(
     
      cart.length? <BoxItems>
         <ContainerButtonAndTitleRelative>
            <h3 style={{position: 'relative', left: '1rem'}}>TUS PEDIDOS</h3>
            <ButtonClose onClick={() => setCloseCart(!closeCart)} />
          </ContainerButtonAndTitleRelative>
      
        {
          CartFilter.map((p, i) => {
            return(
              <Container key={i}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} alt='picture'/>
                <ContainerProduct>
                <H5>{p.title}</H5>
                 <div style={{display: 'flex', alignItems: 'center', position: 'relative', left: '1.5rem'}}>
                  <P>SUBTOTAL: </P>
                 <h6 style={{margin: '0', width: '88px'}}><CurrencyFormat fixedDecimalScale={true} value={p.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} /></h6>
                 </div>
                </ContainerProduct>
                <ButtonItemDelete onClick={() => dispatch(DeleteItem(p.id))}>x</ButtonItemDelete>
              </Container>
            )
          })
        }
       
        <ContainerButtons>
          {
            cart.length>5 && <h4>Podes ver toda tu orden en el carrito</h4>
          }
         <ContainerSubtotal>
         <h4>SUBTOTAL</h4>
         <h4>${priceProduct}</h4>
         </ContainerSubtotal>
        <Button onClick={verCarrito}>VER CARRITO</Button>
        </ContainerButtons>
      </BoxItems> :

      
       
          <BoxNoItem>
          <ContainerButtonAndTitle>
            <h3 style={{position: 'relative', left: '1rem'}}>TUS PEDIDOS</h3>
            <ButtonClose onClick={() => setCloseCart(!closeCart)} />
          </ContainerButtonAndTitle>
      
          <div style={{position: 'relative', right: '1rem'}}>
            <h4>NO HAY PRODUCTOS PARA MOSTRAR</h4>
            <Button onClick={handleClic}>ARMA TU HIT</Button>
          </div>
         </BoxNoItem>

      
        
        
    )
}