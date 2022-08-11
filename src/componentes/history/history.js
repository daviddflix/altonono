import { useSelector } from 'react-redux'
import Button from '@mui/material/Button' 
import {BsCartX} from 'react-icons/bs'
import s from './history.module.css'
import {useHistory} from 'react-router-dom'
import moment from 'moment'

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
                <h2>Tus Pedidos</h2>
                <div className={s.mainboxCard}>
                    {
                        history?.map(p => {
                            return(
                                <Card key={p.id}
                                 name={p.name}
                                 monto={p.monto}
                                 items={p.items}
                                 id={p.id}
                                 date={p.createdAt}
                                />
                               
                            )
                        })
                    }
                </div>
            </div>:
            <div className={s.containerNoOrder}>
                <h2>Tus Pedidos</h2>
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


function Card({monto, name, items, id, date}){
    console.log(moment(date.slice(0,10)).format('LLL'))
    return(
        <div className={s.boxcard}>
            <div className={s.containerbox}>
                <span className={s.span}></span>
                <div className={s.subconatiner1}>
                <h3 className={s.name}>{name}</h3>
                <span style={{fontSize: '.8rem'}}>{moment(date.slice(0,10)).format('ll')}</span>
                </div>
                {/* <div className={s.subconatiner}>
                    <span>{moment(date.slice(0,10)).format('ll')}</span>
                    <h3 style={{margin: '.5rem 0 0 0'}}>${monto}</h3>
                </div> */}
            </div>
            {
                items?.map((p, i) => {
                    return(
                    <div key={i} className={s.subcontainerbox}>
                        <div className={s.name}>
                            <span style={{fontSize: '.8rem'}} className={s.quantity}>x{p.quantity}</span>
                            <span style={{fontSize: '.8rem'}}>{p.title}</span>
                        </div>
                        <span className={s.subconatiner}>${p.unit_price}</span>
                    </div>
                    )
                })
            }
            <div className={s.subcontainerbox}>
            <h3 style={{fontSize: '.8rem'}}>Total</h3>
            <h3 style={{fontSize: '.8rem'}}>${monto}</h3>
            </div>
        </div>
    )
}