import { useDispatch, useSelector } from "react-redux"
import CurrencyFormat from 'react-currency-format'
import s from './reviewOrder.module.css'
import { Button } from "@mui/material"
import { useHistory } from 'react-router-dom';
import { DeleteItem } from "../../redux/actions";
import {RiArrowLeftSLine} from 'react-icons/ri'
import {TbTrashX} from 'react-icons/tb'
import { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import io from "socket.io-client";

const port = 'https://altonono.herokuapp.com'

export default function ReviewOrder(){

    const cart = useSelector(state => state.cart)

    const subtotal = cart.map(p => p.unit_price * p.quantity)
    const total = subtotal.reduce((a,b) => a + b, 0)
    const {client, setClient} = useContext(userContext)

    const [response, setResponse] = useState("");
    console.log('res.socket', response)


    useEffect(() => {  
        let isMounted = true
         const socket = io.connect(`${port}`, {transports: ['websocket', 'polling']})
          socket.on('offline', data => {
             if (isMounted) setResponse(data)
           })
           socket.on('online', data => {
            if (isMounted) setResponse(data)
          })
          return ()=> { isMounted = false}
         })

   
    
    const handleComentarios = (e) => {
        setClient(prev => ({...prev, comentarios: e.target.value}))
    }

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
            <RiArrowLeftSLine onClick={back} className={s.arrow}/>
           <div className={s.boxCard}>
           {
             cart.length > 0? cart.map((p, i) => {
                    return(
                    <Card key={i} description={p.description} title={p.title} quantity={p.quantity} id={p.id} subtotal={p.quantity * p.unit_price}/>
                    )
                }) : <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%'}}>
                    <h4>No hay productos para mostrar</h4>
                </div>
            }
           </div>
           {
               cart.length> 0 && <div className={s.boxTextarea}>
               <h4>Comentarios</h4>
               <textarea value={client.comentarios} onChange={handleComentarios} placeholder="Agrega instrucciones o comentarios" className={s.textarea}></textarea>
           </div>
           }
            <div className={s.styleflex}>
                <h4>TOTAL</h4>
                <CurrencyFormat style={{marginLeft: '3rem'}} value={total} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <div className={s.styleflex}>
                <Button style={{marginBottom: '2rem'}} variant='contained' disabled={!cart.length || response === 'offline' } onClick={payment}>FINALIZAR PEDIDO</Button>
            </div>
        </div>
    )
}


function Card({title, quantity, subtotal, id, description}){

    const dispatch = useDispatch()

    const btn = () => {
        dispatch(DeleteItem(id))
    }
    return(
        <div className={s.boxReview}>
        <button onClick={btn} className={s.btnDelete}><TbTrashX/></button>
        <div className={s.styleflex}>
        <h3 style={{color: 'red', fontWeight: '900'}}className={s.margin}>{title}</h3>
        <h3 style={{margin: 0}}>{quantity}</h3>
        </div>
        <h6 style={{margin: 0, position: 'absolute', top: '2.3rem', left: '1.7rem'}}>{description}</h6>
        <div className={s.styleflex}>
            <h5 className={s.margin}>SUBTOTAL</h5>
            <CurrencyFormat value={subtotal} displayType={'text'} thousandSeparator={true} prefix={'$'} />
        </div>
       </div>
    )
}