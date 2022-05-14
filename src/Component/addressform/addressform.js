import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {  getLinkPayment, postCompra, postUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import userContext from '../context/userContext';


export default function AddressForm() {

    const { user } = useAuth0();
    let cart = useSelector(state => state.cart);

    let link = useSelector(state => state.link);
    const dispatch = useDispatch()
    const history = useHistory()

    const {input, setInput} = React.useContext(userContext)
    console.log(input)
    useEffect(() => {
     if(user){
         setInput(prev => ({...prev, sub: user.sub}))
     }
    },[user])

    useEffect(() => {
       if(input.direccion && input.email && input.nombre && input.numero && input.sub){
        dispatch(postUser(input))
       }
    }, [input, dispatch])

  
    const submitform = (e) => {
        e.preventDefault()
        dispatch(postCompra({cart, user}))
        dispatch(getLinkPayment({cart, user}))
       
    }

    const handleInput = (e) => {
        setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const total = cart.map(p => p.unit_price)
    
    const priceProduct =   total.reduce((prev, curr) => {
     return prev + curr 
    }, 0)



  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Direccion de envio
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleInput}
            value={input.nombre}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="direccion"
            name="direccion"
            label="Direccion"
            fullWidth
            value={input.direccion}
            autoComplete="shipping address-line1"
            variant="standard"
            onChange={handleInput}
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numero"
            name="numero"
            label="Numero de celular"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            onChange={handleInput}
            value={input.numero}
            type='number'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="standard"
            onChange={handleInput}
            value={input.email}
            required
          />
        </Grid>
        {/* <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}