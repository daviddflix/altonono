import { useContext, useState } from "react";
import {  Cart, ContainerRutas, ImgLogo, Link, LinkLogo, MainContainer, Menu, MenuCart, MobileIcon, RedirectLink, Wrapper } from "./styles";
import Carrito from "../cart/cart";
import logo from '../../image/119711044_788870178530785_8282321138516462315_n.jpg'
import Context from "../context/Items";

export default function Nav(){ 


     const [show, setShow] = useState(false)
     const {closeCart, setCloseCart} = useContext(Context)
    
 
  const showRoutes = () => {
     if(closeCart === true){
          setShow(!show)
          setCloseCart(false)
       }else{
          setShow(!show)
       }
  }

//   setShow(!show)
//   setShowCart(showCart)

  const cart = () => {
       if(show === true){
          setShow(false)
          setCloseCart(!closeCart)
       }else{
         setCloseCart(!closeCart)
       }
}

     return( 

<MainContainer>
  <Wrapper>

     <MobileIcon onClick={showRoutes}/>

    <LinkLogo to='/'>
      <div> <ImgLogo src={logo} alt='logo'/></div>
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

     <MenuCart open={closeCart} >
        <Carrito/>
     </MenuCart>


  
  </Wrapper>
 </MainContainer>


     )
}