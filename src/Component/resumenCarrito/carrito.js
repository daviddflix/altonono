import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { postCompra, getAllCompras } from "../../redux/actions";
import { Container, ContainerProduct, Img } from "./styles"
import { useAuth0 } from "@auth0/auth0-react";



export default function ResumenCarrito (){

  const {isAuthenticated, user  } = useAuth0();
   console.log('user',user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  const postDataCompra = async () => {
    isAuthenticated && cart.length &&  dispatch(postCompra(cart))  

    if(isAuthenticated){
      history.push('/formPago')
    }
  }

  useEffect(() => {
    dispatch(getAllCompras())
  }, [ dispatch])

   
    return(
        <div>
            <div>
        {
         cart.length && cart.map((p, i)=> {
            return(
              <Container key={i}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} alt='picture'/>
                <ContainerProduct>
                <h3>{p.title}</h3>
                <h4>${p.unit_price}</h4>
                </ContainerProduct>
              </Container>
            )
          })
        }
      </div>
      <button onClick={postDataCompra}>FINALIZAR COMPRA</button>
        </div>
    )
}