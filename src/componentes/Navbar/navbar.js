import s from './navbar.module.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {  useEffect } from 'react';
import { getStatus } from '../../redux/actions';
import VerticalNav from '../VerticalNav/verticalNav';
import Button from '../VerticalNav/button';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Navbar(){

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStatus())
    }, [dispatch])

    const items = useSelector(state => state.cart)
    const status = useSelector(state => state.status);
    const findStatus = status.length > 0 && status[0].status;
    const viewCart = () => {
        history.push('/review')
    }

    
    const home = () => {
        history.push('/')
    }

   

    return(
        <div className={s.main}>
            {/* {nav == false? <MenuIcon onClick={showRoutes} className={s.bars}/> : <AiOutlineClose onClick={showRoutes} className={s.bars}/>} */}
            {/* <Button/> */}
            <div className={s.container}>
            <h3 onClick={home} className={s.title}>ALTONONO - FUTBOL EN SERIO</h3>
            {findStatus === "Cerrado" && <h4 className={s.store}>Tienda cerrada</h4>}
            </div>
            <IconButton style={{position: 'absolute', right: '1rem'}} aria-label="cart">
            <StyledBadge badgeContent={items.length? items.length : '0'} color="primary">
                <ShoppingCartIcon style={{color: '#fff'}} onClick={viewCart} />
            </StyledBadge>
            </IconButton>
            <VerticalNav/>
        </div>
    )
}