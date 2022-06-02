import { Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cashPayment, getLinkPayment, resetCart } from "../../redux/actions"
import userContext from "../context/userContext"
import s from './payment.module.css'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"
import {RiArrowLeftSLine} from 'react-icons/ri'

export default function Payment(){

    const {client, setClient} = useContext(userContext)
    const cart = useSelector(state => state.cart)
    const link = useSelector(state => state.link)

   const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
   const emailOk = regex.test(client.email)

   const dispatch = useDispatch()
   const history = useHistory()

 

   const back = () => {
     history.push('/review')
   }

    console.log('cart', cart)
   useEffect(() => {
    if(cart.length && client.email && client.method === 'Mercado Pago' && client.name && client.table && emailOk === true){
        dispatch(getLinkPayment({cart, client}))
    }
   }, [client.method, cart, dispatch, emailOk, client])

   const cash = () => {
       if(cart.length && client.email.length && client.method === 'Efectivo' && client.name.length && client.table.length && emailOk === true){
        Swal.fire({
            icon: 'success',
            title: 'Pedido Confirmado',
            text: "Nuestra camarera le acercara su pedido",
            showConfirmButton: true,
            // timer: 1500
            })
            dispatch(cashPayment({client, cart}))
            dispatch(resetCart())
            history.push('/')
       }
      
   }

    let handleInputChange = (e) => {
        setClient(prev => ({...prev, [e.target.name] : e.target.value
        }));
        // setErrors(handleError({
        //     ...input,
        //     [e.target.name]: e.target.value
        //   }))
    }


    let handleMethod = (e) => {
        setClient({...client, method: e.target.value})
    }

    return(
       <div className={s.main}>
           <RiArrowLeftSLine onClick={back} className={s.arrow}/>
           <h3 style={{marginRight: '1.5rem'}}>Completa tus Datos</h3>
           <div className={s.boxSubMain}>
           <input className={s.input} value={client.name} name='name' placeholder='Nombre' onChange={handleInputChange}/>
           <input className={s.input} type='email'  value={client.email} name='email' placeholder='Email' onChange={handleInputChange}/>
           <input className={s.inputTable} type='number'  value={client.table} name='table' placeholder='Numero de Mesa' onChange={handleInputChange}/>


             <div className={s.select}>
            <label >Metodo de Pago</label>
           <select className={s.selectinput} name="method" onChange={handleMethod}>
               <option value=""></option>
               <option value="Efectivo">Efectivo</option>
               <option value="Mercado Pago">Mercado Pago</option>
           </select>
             </div>
            
         
          </div>
          <div>
            {
                 client.method === 'Efectivo'?  <Button variant='contained' style={{marginRight: '1.5rem'}} onClick={cash}>Confirmar Pedido</Button> :
                <Button size='large' disabled={!link.length} ><a className={s.btnMp} href={link}>Confirmar Pedido</a></Button> 
                 
             }
            </div>
       </div>
    )
}