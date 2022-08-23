import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button' 
import {BsCartX} from 'react-icons/bs'
import s from './history.module.css'
import {useHistory} from 'react-router-dom'
import logo from '../Assets/descarga.png'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import { clearDetail } from '../../redux/actions'

export default function History (){

    const history = useSelector(state => state.history);
    const route = useHistory();
     

    const handleMenu = () => {
      route.push('/')
    }
    
    return(
        <div className={s.mainContainer}>
           {
            history.length>0?
            <div className={s.submaincontainer}>
                <h2>Mis Pedidos</h2>
                <div className={s.mainboxCard}>
                    {
                        history?.map(p => {
                            return(
                                <Card key={p.id}
                                 name={p.name}
                                 monto={p.monto}
                                 items={p.items}
                                 id={p.id}
                                 date={p.date}
                                 method={p.method}
                                />
                               
                            )
                        })
                    }
                </div>
            </div>:
            <div className={s.containerNoOrder}>
                <h2>Mis Pedidos</h2>
                <div className={s.subcontainerNoOrder}>
                    <BsCartX className={s.emptyCart}/>
                    <h3>Hace tu primer pedido</h3>
                    <Button onClick={handleMenu} style={{width: '50%'}} variant='contained'>Ver Menu</Button>
                </div>
            </div>
           }
        </div>
    )
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function Card({name, id, date, method}){
   

    const history = useHistory();
    const dispatch = useDispatch()

    const detail = () => {
       dispatch(clearDetail())
       history.push(`/detail/${id}`)
    }

    return(
        <div className={s.boxcard}>
            <div className={s.containerbox}>
                <img  className={s.logo} src={logo} alt='logo'/>
                <div className={s.subconatiner1}>
                <h3 className={s.name}>{capitalizeFirstLetter(name)}</h3>
                <span style={{fontSize: '.8rem'}}>{date}</span>
                </div>
                <h3 className={s.status}>{method}</h3>
            </div>
            <div  onClick={detail} className={s.boxcard2}>
                <h3>Detalle</h3>
                <MdOutlineArrowForwardIos className={s.arrow}/>
            </div>
        </div>
    )
}
