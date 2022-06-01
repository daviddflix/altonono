import s from './navbar.module.css'
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));

export default function Navbar(){

    const history = useHistory()
    const items = useSelector(state => state.cart)

    const viewCart = () => {
        history.push('/review')
    }

    const home = () => {
        history.push('/')
    }

    return(
        <div className={s.main}>
            <h3 onClick={home} className={s.title}>ALTONONO - FULTBOL EN SERIO</h3>
            <IconButton aria-label="cart">
            <StyledBadge badgeContent={items.length? items.length : '0'} color="primary">
                <ShoppingCartIcon style={{color: '#fff'}} onClick={viewCart} />
            </StyledBadge>
            </IconButton>
        </div>
    )
}