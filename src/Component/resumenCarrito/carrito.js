import { useSelector } from "react-redux"
import { Container, ContainerProduct, Img } from "./styles"


export default function ResumenCarrito (){

    const cart = useSelector(state => state.cart)
    return(
        <div>
            <div>
        {
         cart.length && cart.map(p => {
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
      </div>
      <button>FINALIZAR COMPRA</button>
        </div>
    )
}