import { useDispatch, useSelector } from "react-redux"
import CurrencyFormat from 'react-currency-format'
import s from './reviewOrder.module.css'
import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom';
import { DeleteItem } from "../../redux/actions";

export default function ReviewOrder(){

    const cart = useSelector(state => state.cart)

    const subtotal = cart.map(p => p.unit_price * p.quantity)
    const total = subtotal.reduce((a,b) => a + b, 0)

    console.log('sub', subtotal)

    const history = useHistory()

    const back = () => {
      history.push('/')
    }

    const payment = () => {
        history.push('/payment')
      }

    


    return(
        <div className={s.mainBox}>
            <h2>TUS PRODUCTOS</h2>
            {
                cart.map((p, i) => {
                    return(
                    <Card key={i} title={p.title} quantity={p.quantity} id={p.id} subtotal={p.quantity * p.unit_price}/>
                    )
                })
            }
            <div className={s.styleflex}>
                <h4>TOTAL</h4>
                <CurrencyFormat value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <div className={s.styleflex}>
                <Button variant='contained' onClick={payment}>FINALIZAR PEDIDO</Button>
                <Button variant='contained' onClick={back}>VOLVER</Button>
            </div>
        </div>
    )
}


function Card({title, quantity, subtotal, id}){

    const dispatch = useDispatch()

    const btn = () => {
        dispatch(DeleteItem(id))
    }
    return(
        <div className={s.boxReview}>
        <button onClick={btn} className={s.btnDelete}>x</button>
        <div className={s.styleflex}>
        <h3 className={s.margin}>{title}</h3>
        <h3 >{quantity}</h3>
        </div>
        <div className={s.styleflex}>
            <h5 className={s.margin}>SUBTOTAL</h5>
            <CurrencyFormat value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
      </div>
    )
}