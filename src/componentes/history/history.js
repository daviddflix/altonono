import { useSelector } from 'react-redux'
import Button from '@mui/material/Button' 
import {BsCartX} from 'react-icons/bs'
import s from './history.module.css'
import {useHistory} from 'react-router-dom'

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
                    <h3>Aun no tienes Pedidos</h3>
                    <Button onClick={handleMenu} style={{width: '50%'}} variant='contained'>Ver Menu</Button>
                </div>
            </div>
           }
        </div>
    )
}


function Card({monto, name, items}){
    return(
        <div className={s.boxcard}>
            <div className={s.containerbox}>
                <h3 className={s.name}>{name}</h3>
                <div className={s.subconatiner}>
                    <h3>${monto}</h3>
                </div>
            </div>
            {
                items?.map((p, i) => {
                    return(
                    <div key={i} className={s.subcontainerbox}>
                        <div className={s.name}>
                            <span className={s.quantity}>x{p.quantity}</span>
                            <span>{p.title}</span>
                        </div>
                        <span className={s.subconatiner}>{p.unit_price}</span>
                    </div>
                    )
                })
            }
        </div>
    )
}