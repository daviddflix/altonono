import { useContext } from "react";
import { useHistory } from "react-router-dom";
import Context from "../context/Items";
import { Button, ButtonClose, Item } from "./styles";



export default function Carrito(){

  const history = useHistory()
  const {closeCart, setCloseCart} = useContext(Context)
  console.log(closeCart)

  const handleClic = () => {
     history.push('/productos')
  }
    return(
        <Item>
          <ButtonClose onClick={() => setCloseCart(!closeCart)} />
        <h4>NO HAY PRODUCTOS PARA MOSTRAR</h4>
        <Button onClick={handleClic}>ARMA TU HIT</Button>
      </Item>
    )
}