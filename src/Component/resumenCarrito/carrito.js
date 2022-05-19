import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router-dom";
import { postCompra, getAllCompras, DeleteItem } from "../../redux/actions";
import { BtnFinalizarCompra, Container, ContainerProduct, Flex, Img, MainContainer,FlexOptions, Title, ButtonItemDelete, ButtonVerCarrito } from "./styles"
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
      
  }

  useEffect(() => {
    dispatch(getAllCompras())
  }, [ dispatch])

  const priceProduct = cart.map(p => p.unit_price)
  const total =   priceProduct.reduce((prev, curr) => {
   return prev + curr 
  }, 0)

  const backToProducts = () => {
    history.push('/productos')
 }
   
    return(
        <MainContainer>

            <h2 >TUS PRODUCTOS</h2>
            
            <div>
               {
                  cart.length && cart.map((p, i)=> {
                    return(
                      <Container key={i}>
                         <ButtonItemDelete onClick={() => dispatch(DeleteItem(p.id))} />
                        <Img src={`https://hit-pasta.herokuapp.com/${p.picture_url}`} alt='picture'/>
                        <ContainerProduct>
                        <h3>{p.title}</h3>
                        <Flex>
                        <h4>SALSAS:</h4>
                         <div style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                         {
                            p.salsa.map((i, index) => {
                              return(
                                <FlexOptions key={index}>
                                  <h4 style={{margin: '0'}}>{i}</h4>
                                </FlexOptions>
                              )
                            })
                          }
                         </div>
                        </Flex>
                        <Flex>
                        <h4>TOPPINGS:</h4>
                          <div style={{display: 'flex', flexDirection: 'column', margin: '0'}}>
                          {
                            p.toppings.map((i, index) => {
                              return(
                                <FlexOptions key={index}>
                                  <h4 style={{margin: '0', }}>{i}</h4>
                                  <h4 style={{margin: '0', }}>{p.priceTopping}</h4>
                                </FlexOptions>
                              )
                            })
                          }
                          </div>
                        </Flex>
                     
                     
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
              <h4>TOTAL</h4>
              <CurrencyFormat  fixedDecimalScale={true} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
           </Flex>

           <div style={{display:'flex', width: '100%'}}>
           <BtnFinalizarCompra 
              onClick={ProcederAlPago} 
              disabled={!cart.length}>FINALIZAR COMPRA</BtnFinalizarCompra>
               <ButtonVerCarrito onClick={backToProducts}>ARMA OTRO HIT</ButtonVerCarrito>
           </div>

        </MainContainer>
    )
}