import { Anchor, IconMap, HeaderPi, MainContainer, Text, IconPayment, IconGeo, Container } from "./styles";
import img from './image/google-maps-color-codes.svg'


export default function Info (){
    return(
      
           <MainContainer id="envio">
               <Container>
                   <IconGeo/>
                   <h2>Puntos de Pick Up</h2>
                   <HeaderPi>Podes hacer tu pedido por Whatsapp y pasar a buscarlo</HeaderPi>
                  <Anchor href="https://goo.gl/maps/FH46g2sfJuPotPnY8" > <IconMap src={img} /><Text>Ladislao Martínez 40, Martínez, Provincia de Buenos Aires</Text></Anchor>
                  <Anchor href="https://goo.gl/maps/NNLvnZSWAMTC5Z2d9"> <IconMap src={img}/><Text>Soldado de la Independencia 1073, CABA</Text></Anchor>
               </Container>
               <Container>
                   <IconPayment/>
                   <h2>Metodos de pago</h2>
                   <Text>Podes pagar con tarjeta de credito, debito o mercado pago en cualquiera de nuestras sucursales</Text>
               </Container>

           </MainContainer>
       
    )
}