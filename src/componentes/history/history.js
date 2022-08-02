import { useSelector } from 'react-redux'
import Button from '@mui/material/Button' 
import {BsCartX} from 'react-icons/bs'
import s from './history.module.css'

export default function History (){

    const history = useSelector(state => state.history)
    console.log(history)
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
                                 quantity={p.items.map(p => p.quantity)}
                                 unit_price={p.items.map(p => p.unit_price)}
                                 title={p.items.map(p => p.title)}
                                />
                               
                            )
                        })
                    }
                </div>
            </div>:
            <div className={s.containerNoOrder}>
                <BsCartX className={s.emptyCart}/>
                <h3>Aun no tienes Pedidos</h3>
                <Button style={{width: '50%'}} variant='contained'>Ver Menu</Button>
            </div>
           }
        </div>
    )
}


function Card({monto, name, quantity, title, unit_price}){
    return(
        <div className={s.boxcard}>
            <div className={s.containerbox}>
                <h3 className={s.name}>{name}</h3>
                <div className={s.subconatiner}>
                    <h3>${monto}</h3>
                </div>
            </div>
            <div className={s.subcontainerbox}>
                <div className={s.name}>
                <span className={s.quantity}>x{quantity}</span>
                <span>{title}</span>
                </div>
                <span className={s.subconatiner}>{unit_price}</span>
            </div>
        </div>
    )
}