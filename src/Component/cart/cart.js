
import { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Context from "../context/Items";
import { Button, ButtonClose, Container, ContainerProduct, Img, Item } from "./styles";



export default function Carrito(){

  const history = useHistory()
  const {closeCart, setCloseCart} = useContext(Context);
 
  let cart = useSelector(state => state.cart);
  
 
  console.log('cart:',cart)

  const handleClic = () => {
     history.push('/productos')
  }
    return(
     
      cart.length? <div>
        {
          cart.map(p => {
            return(
              <Container key={p.id}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.picture}`} alt='picture'/>
                <ContainerProduct>
                <h3>{p.product}</h3>
                <h4>${p.price}</h4>
                </ContainerProduct>
              </Container>
            )
          })
        }
      </div> :

        <Item>
        <ButtonClose onClick={() => setCloseCart(!closeCart)} />
        <h4>NO HAY PRODUCTOS PARA MOSTRAR</h4>
        <Button onClick={handleClic}>ARMA TU HIT</Button>
        </Item>
        
        
    )
}