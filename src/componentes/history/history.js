import { useSelector } from 'react-redux'
import Button from '@mui/material/Button' 
import {BsCartX} from 'react-icons/bs'
import s from './history.module.css'

export default function History (){

    const history = useSelector(state => state.history)
    console.log(history)
    return(
        <div>
           {
            history.length>0?
            <div>
                <h3>Tus Pedidos</h3>
                <div className={s.mainboxCard}>
                    {
                        history?.map(p => {
                            return(
                                <div className={s.boxcard} key={p.id}>
                                    <h3>{p.name}</h3>
                                </div>
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