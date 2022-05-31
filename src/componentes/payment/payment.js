import { Button } from "@mui/material"
import { useContext } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLinkPayment, resetCart } from "../../redux/actions"
import userContext from "../context/userContext"
import s from './payment.module.css'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"

export default function Payment(){

    const {client, setClient} = useContext(userContext)
    const cart = useSelector(state => state.cart)

   const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
   const emailOk = regex.test(client.email)

   const dispatch = useDispatch()
   const history = useHistory()

   const getlink = () => {
       if(client.email && client.method && client.name && client.table && emailOk === true){
           dispatch(getLinkPayment({cart, client}))
       }
   }

   const cash = () => {
        Swal.fire({
        icon: 'success',
        title: 'Pedido Confirmado',
        text: "Nuestra camarera le acercara su pedido",
        showConfirmButton: true,
        // timer: 1500
        })
        dispatch(resetCart())
        history.push('/')
   }

    let handleInputChange = (e) => {
        setClient(prev => ({...prev, [e.target.name] : e.target.value
        }));
        // setErrors(handleError({
        //     ...input,
        //     [e.target.name]: e.target.value
        //   }))
    }

    let handleMesa = (e) => {
        setClient({...client, table: e.target.value})
    }

    let handleMethod = (e) => {
        setClient({...client, method: e.target.value})
    }

    return(
       <div className={s.main}>
           <h3>Rellena tus Datos</h3>
           <input className={s.input} value={client.name} name='name' placeholder='Nombre' onChange={handleInputChange}/>
           <input className={s.input}  value={client.email} name='email' placeholder='Email' onChange={handleInputChange}/>
          
           <div className={s.select}>
            <label>Mesa</label>
           <select className={s.selectinput} name="mesa" onChange={handleMesa}>
               <option value=""></option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
               <option value="4">4</option>
               <option value="5">5</option>
           </select>
             </div>

             <div className={s.select}>
            <label >Metodo de Pago</label>
           <select className={s.selectinput} name="method" onChange={handleMethod}>
               <option value=""></option>
               <option value="Efectivo">Efectivo</option>
               <option value="Mercado Pago">Mercado Pago</option>
           </select>
             </div>
            
            <div>
            {
                 client.method === 'Efectivo'? <Button  variant='contained' onClick={cash}>Confirmar Pedido</Button> :
                 <Button variant='contained' onClick={getlink}>Confirmar Pedido</Button>
             }
            </div>
       </div>
    )
}