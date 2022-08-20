import s from './navbar.module.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext, useEffect } from 'react';
import { getStatus } from '../../redux/actions';
import VerticalNav from '../VerticalNav/verticalNav';
import navContext from '../context/navContext';
import {AiOutlineClose} from 'react-icons/ai'

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
    const items = useSelector(state => state.cart)
    const status = useSelector(state => state.status);
    const findStatus = status.length >0 ? status[0].status: 'offline'
    const {nav, setNav} = useContext(navContext)
    const viewCart = () => {
        history.push('/review')
    }

    const home = () => {
        history.push('/')
    }

    useEffect(() => {
        dispatch(getStatus())
    }, [])

    const showRoutes = () => {
        if(nav === true){
             setNav(!nav)
          }else{
            setNav(!nav)
          }
     }
   

    return(
        <div className={s.main}>
            {nav == false? <MenuIcon onClick={showRoutes} className={s.bars}/> : <AiOutlineClose onClick={showRoutes} className={s.bars}/>}
            <div className={s.container}>
            <h3 onClick={home} className={s.title}>ALTONONO - FUTBOL EN SERIO</h3>
            {findStatus === 'offline' && <h4 className={s.store}>Tienda cerrada</h4>}
            </div>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={items.length? items.length : '0'} color="primary">
                <ShoppingCartIcon style={{color: '#fff'}} onClick={viewCart} />
            </StyledBadge>
            </IconButton>
            <VerticalNav/>
        </div>
    )
}