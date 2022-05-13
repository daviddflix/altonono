import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { postCompra, getAllCompras } from "../../redux/actions";
import { BtnFinalizarCompra, Container, ContainerProduct, Flex, Img, MainContainer, Title } from "./styles"
import { useAuth0 } from "@auth0/auth0-react";
import CurrencyFormat from 'react-currency-format';



export default function ResumenCarrito (){

  const {isAuthenticated, user  } = useAuth0();
   console.log('user',user)
  const cart = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const history = useHistory()

  const ProcederAlPago = async () => {
      history.push('/formPago')
      window.scroll(0,0)
  }

  useEffect(() => {
    dispatch(getAllCompras())
  }, [ dispatch])

  const priceProduct = cart.map(p => p.unit_price)
  const total =   priceProduct.reduce((prev, curr) => {
   return prev + curr 
  }, 0)

   
    return(
        <MainContainer>
            <div>
             <Title >

             {/* <h2 >TUS PRODUCTOS</h2> */}
             </Title>
        {
         cart.length && cart.map((p, i)=> {
            return(
              <Container key={i}>
                <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} alt='picture'/>
                <ContainerProduct>
                <h3>{p.title}</h3>
                <div>
                  {
                    p.salsa.map(i => {
                      return(
                        <div>
                          <h4>{i}</h4>
                        </div>
                      )
                    })
                  }
                </div>
                <div>
                  
                  {
                    p.toppings.map(i => {
                      return(
                        <Flex>
                          <h4>SALSAS</h4>
                          <h4>{i}</h4>
                        </Flex>
                      )
                    })
                  }
                </div>
                <Flex>
                 <h4>SUBTOTAL</h4>
                 <CurrencyFormat fixedDecimalScale={true} value={p.unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                </Flex>
                </ContainerProduct>
              </Container>
            )
          })
        }
      </div>
      <Flex>
        <h4>TOLTAL</h4>
        <CurrencyFormat  fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        {/* <h4>${total}</h4> */}
      </Flex>
      <BtnFinalizarCompra onClick={ProcederAlPago} disabled={!cart.length}>FINALIZAR COMPRA</BtnFinalizarCompra>
        </MainContainer>
    )
}