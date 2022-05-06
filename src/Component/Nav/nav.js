import { useContext, useEffect, useState } from "react";
import {  Cart, ContainerRutas, ImgLogo, Link, LinkLogo, MainContainer, MenuBar, MenuCart, MobileIcon, PictureAuth0, RedirectLink, Wrapper } from "./styles";
import Carrito from "../cart/cart";
import logo from '../../image/119711044_788870178530785_8282321138516462315_n.jpg'
import Context from "../context/Items";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { postUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import Badge from '@mui/material/Badge'

export default function Nav(){ 

     const {isAuthenticated, user, loginWithPopup, logout , loginWithRedirect } = useAuth0();
     console.log(user)
     const [show, setShow] = useState(false)
     const {closeCart, setCloseCart} = useContext(Context)
     const [anchorEl, setAnchorEl] = useState(null);
     const open = Boolean(anchorEl);
     const history = useHistory()

     const dispatch = useDispatch()

     useEffect(() => {
          if (isAuthenticated) {
            dispatch(postUser(user))
              .then(res => {
                console.log(res.data)
              })
              .catch(err => {
                console.log(err.response)
              })
          }
        }, [user, isAuthenticated])
    
     const handleClickLogout = () => {
          logout();
        };

        const handleClickProfile = () => {
          history.push('/userProfile')
          setAnchorEl(null)
        };

        const handleClick = (event) => {
          setAnchorEl(event.currentTarget);
        };

        const handleClose = () => {
          setAnchorEl(null)
        }
 
  const showRoutes = () => {
     if(closeCart === true){
          setShow(!show)
          setCloseCart(false)
       }else{
          setShow(!show)
       }
  }

  const cart = () => {
       if(show === true){
          setShow(false)
          setCloseCart(!closeCart)
       }else{
         setCloseCart(!closeCart)
       }
}

const onClose = () => {
     setShow(false)
     window.scroll(0,0)
}

     return( 

<MainContainer>
  <Wrapper>

     <MobileIcon onClick={showRoutes}/>

    <LinkLogo to='/'>
      {/* <div> <ImgLogo src={logo} alt='logo'/></div> */}
     <h1 style={{color: '#fff',  fontFamily: 'Lobster'}}>HIT PASTA</h1>
    </LinkLogo>

     <Cart onClick={cart}/>

    
    <MenuBar open={show} >

          <ContainerRutas>
               <Link to='/' exact onClick={onClose} >
               HOME
               </Link>
          </ContainerRutas>
    
          <ContainerRutas>
               <Link to='/productos' exact onClick={onClose}>
               PRODUCTOS
               </Link>
          </ContainerRutas>
     
          <ContainerRutas>
               <RedirectLink smooth to ='#envio' onClick={onClose}>
               ENVIOS
               </RedirectLink>

          </ContainerRutas>

    </MenuBar>

     <div>
        
    <MenuCart open={closeCart} >
        <Carrito/>
     </MenuCart>
    
     
     {isAuthenticated ? (

          <div>
          <Button
          id='basic-button'
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          
          >
          <PictureAuth0  src={user.picture} alt='picture' />
          </Button>
          <Menu
          style={{marginTop: '10px', marginLeft: '6px'}}
          id='basic-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
               'aria-labelledby': 'basic-button'
          }}
          >
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} onClick={handleClickProfile}>Perfil</MenuItem>
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} >Pedidos</MenuItem>
          <MenuItem style={{display: 'flex', flexDirection:'column', padding:'.5rem 1.5rem', color: '#e63946'}} onClick={handleClickLogout}>Log out</MenuItem>
          </Menu>
          </div>
          ) : (
          <Button variant='outlined' size="small" color='success'  onClick={() => loginWithRedirect()}>
          Log In 
          </Button>
          )}
     </div>

     
   


  
  </Wrapper>
 </MainContainer>


     )
}