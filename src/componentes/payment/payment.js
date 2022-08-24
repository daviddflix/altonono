import { Button } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { cashPayment, getStatus, resetCart } from "../../redux/actions"
import userContext from "../context/userContext"
import s from './payment.module.css'
import Swal from 'sweetalert2'
import { useHistory } from "react-router-dom"
import {RiArrowLeftSLine} from 'react-icons/ri'
// import { SocketContext } from "../context/socketContext"
import { Alert, TextField } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function Payment(){

    const dispatch = useDispatch();
    const history = useHistory();
    const {client, setClient} = useContext(userContext);
    const cart = useSelector(state => state.cart);
    const order = useSelector(state => state.history);
    // const link = useSelector(state => state.link);
    const status = useSelector(state => state.status);
    // const socket = useContext(SocketContext);
    const findStatus = status.length > 0 && status[0].status
  
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        dispatch(getStatus())
    }, [dispatch])

   const back = () => {
     history.push('/review')
   }

   const cash = () => {
    dispatch(cashPayment({client, cart}))
    dispatch(resetCart())
    if(order.time){
     Swal.fire({
         icon: 'success',
         title: 'Pedido en curso',
         text: "Nuestra camarera le acercara su pedido",
         showConfirmButton: true,
         })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salio mal, por favor realiza tu pedido de nuevo',
        showConfirmButton: true
      })
    }
   history.push('/')
}
// setClient
   const handleChange = (e) => {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(client));
    setIsSubmitting(true);
  };

  const validate = (values) => {
    let errors = {};
    // const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    // const regexTable = /^[1-9][0-9]?$|^100$/

    if (!values.name) {
      errors.name = "No puede estar vacio!";
    } 

    if (!values.table) {
      errors.table= "No puede estar vacio!";
    } 
    if(typeof Number(values.table) !== 'number'){
        errors.table = "Debe ser un numero"
    }
    if(!values.telefono){
        errors.telefono = "No puede estar vacio!"
    }
    if(values.telefono.length > 10 || values.telefono.length < 10){
      errors.telefono = "Ingrese un numero valido"
    }
    if(!values.method){
        errors.method = "No puede estar vacio!"
    }





    return errors;
  };

  

   useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
        cash()
    }
  }, [formErrors, isSubmitting]);


    return(
       <div className={s.main}>
           <RiArrowLeftSLine onClick={back} className={s.arrow}/>
           <h3 style={{marginRight: '1.5rem'}}>Completa tus Datos</h3>
           <form onSubmit={handleSubmit} className={s.boxSubMain}>
            <div className={s.containerInputs}>
             <TextField label='Nombre' className={s.input} value={client.name} name='name' placeholder='Nombre' onChange={handleChange}/>
             {formErrors.name &&  <Alert className={s.error} severity="error">{formErrors.name}</Alert>}
            </div>
            <div className={s.containerInputs}>
            <TextField label='Telefono 11xxxx xxxx' className={s.input} type='tel'  value={client.telefono} name='telefono' placeholder='11xxxx xxxx' pattern="[0-9]{9}" onChange={handleChange}/>
            {formErrors.telefono &&  <Alert className={s.error} severity="error">{formErrors.telefono}</Alert>}
            </div>
            <div className={s.containerInputs}>
            <TextField label='Numero de Mesa' className={s.inputTable} type='number'  value={client.table} name='table' placeholder='Numero de Mesa' onChange={handleChange}/>
            {formErrors.table &&  <Alert className={s.error} severity="error">{formErrors.table}</Alert>}
            </div>
        
             <div className={s.select}>
               <Box sx={{ minWidth: '100%' }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Metodo Pago</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={client.method}
                    name='method'
                    label="Metodo Pago"
                    onChange={handleChange}
                    >
                    <MenuItem value={'Efectivo'}>Efectivo</MenuItem>
                    <MenuItem value={'QR'}>QR</MenuItem>
                    
                    </Select>
                 </FormControl>
                </Box>
                {formErrors.method &&  <Alert className={s.error} severity="error">{formErrors.method}</Alert>}
             </div>
          </form>
          <div className={s.containerBtn}>
          <Button  variant='contained' onClick={handleSubmit} type='submit'  disabled={!cart.length || findStatus === 'Cerrado'} style={{marginRight: '1.5rem', width: '50%'}} >Confirmar Pedido</Button>
         </div>
    </div>
    )
}



//  {/* {
//                  client.method === 'Efectivo'?  <Button variant='contained' style={{marginRight: '1.5rem'}} onClick={cash}>Confirmar Pedido</Button> :
//                 <Button size='large' disabled={!link.length} ><a className={s.btnMp} href={link}>Confirmar Pedido</a></Button> 
                 
//              } */}