import { useState } from "react";
import {  Cart, ContainerRutas, Link, LinkLogo, MainContainer, Menu, MenuCart, MobileIcon, RedirectLink, Wrapper } from "./styles";
import Carrito from "../cart/cart";

export default function Nav(){ 


     const [show, setShow] = useState(false)
     const [showCart, setShowCart] = useState(false)
    
 
  const showRoutes = () => {
     if(showCart === true){
          setShow(!show)
          setShowCart(false)
       }else{
          setShow(!show)
       }
  }

//   setShow(!show)
//   setShowCart(showCart)

  const cart = () => {
       if(show === true){
          setShow(false)
          setShowCart(!showCart)
       }else{
          setShowCart(!showCart)
       }
}

     return( 

<MainContainer>
  <Wrapper>

     <MobileIcon onClick={showRoutes}/>

    <LinkLogo to='/'>
     <h1 style={{fontWeight:'800'}}>HIT PASTA</h1>
    </LinkLogo>

     <Cart onClick={cart}/>

    
    <Menu open={show} >

          <ContainerRutas>
               <Link to='/' exact onClick={() => setShow(false)} >
               HOME
               </Link>
          </ContainerRutas>
    
          <ContainerRutas>
               <Link to='/productos' exact onClick={() => setShow(false)}>
               PRODUCTOS
               </Link>
          </ContainerRutas>
     
          <ContainerRutas>
               <RedirectLink smooth to ='#envio' onClick={() => setShow(false)}>
               ENVIOS
               </RedirectLink>

          </ContainerRutas>

    </Menu>

     <MenuCart open={showCart} >
        <Carrito/>
     </MenuCart>


  
  </Wrapper>
 </MainContainer>


     )
}