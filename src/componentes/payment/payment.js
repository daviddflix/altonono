import { Button } from "@mui/material"
import { useContext, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cashPayment, getLinkPayment, resetCart, statusStore } from "../../redux/actions"
import userContext from "../context/userContext"
import s from './payment.module.css'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"
import {RiArrowLeftSLine} from 'react-icons/ri'
import { SocketContext } from "../context/socketContext"

export default function Payment(){

    const dispatch = useDispatch()
    const {client, setClient} = useContext(userContext)
    const cart = useSelector(state => state.cart)
    const link = useSelector(state => state.link)
    const status = useSelector(state => state.status)
    const socket = useContext(SocketContext)

    socket.on('ping', data => {
        console.log(data)
      socket.emit('pong', {beat: 1})
   })

    
    // useEffect(()=> {
    //     socket.on('online', data => {
    //         console.log('data', data)
    //         dispatch(statusStore(data))
    //     })
    //     socket.on('offline', data => {
    //         console.log('data', data)
    //         dispatch(statusStore(data))
    //     })
    // }, [socket, dispatch, status])
   

//    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/  //check if email is okay
//    const emailOk = regex.test(client.email)

  
   const history = useHistory()

   const regex = /^[1-9][0-9]?$|^100$/
   const validateNumber = regex.test(client.table)
 

   const back = () => {
     history.push('/review')
   }

   const date = new Date().getHours()
const fecha = date > 22 ? false : true  //close store at this time

   
   useEffect(() => {
    if(cart.length && client.email && client.method === 'Mercado Pago' && client.name && client.table && validateNumber === true){
        dispatch(getLinkPayment({cart, client}))
    }
   }, [client.method, cart, dispatch, client, validateNumber, status])

   const cash = () => {
       if(cart.length && client.telefono.length && client.method === 'Efectivo' && validateNumber === true && client.name.length && client.table.length){
        Swal.fire({
            icon: 'success',
            title: 'Pedido Confirmado',
            text: "Nuestra camarera le acercara su pedido",
            showConfirmButton: true,
            })
            socket.emit('pedido', {client, cart})
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
           <input className={s.input} type='tel'  value={client.telefono} name='telefono' placeholder='Telefono' onChange={handleInputChange}/>
         
           <input className={s.inputTable} type='number'  value={client.table} name='table' placeholder='Numero de Mesa' onChange={handleInputChange}/>


             <div className={s.select}>
            <label >Metodo de Pago</label>
           <select className={s.selectinput} name="method" onChange={handleMethod}>
               <option value=""></option>
               <option value="Efectivo">Efectivo</option>
               <option value="Mercado Pago" disabled={true}>Mercado Pago</option>
           </select>
             </div>
            
         
          </div>
          <div>
          <Button variant='contained'  disabled={!cart.length} style={{marginRight: '1.5rem'}} onClick={cash}>Confirmar Pedido</Button>
            {/* {
                 client.method === 'Efectivo'?  <Button variant='contained' style={{marginRight: '1.5rem'}} onClick={cash}>Confirmar Pedido</Button> :
                <Button size='large' disabled={!link.length} ><a className={s.btnMp} href={link}>Confirmar Pedido</a></Button> 
                 
             } */}
            </div>
       </div>
    )
}