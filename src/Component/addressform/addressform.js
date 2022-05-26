import * as React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {  getLinkPayment, postCompra, postUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";
import userContext from '../context/userContext';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function AddressForm() {

    const { user } = useAuth0();
    let cart = useSelector(state => state.cart);

    let link = useSelector(state => state.link);
    const dispatch = useDispatch()
   

    const {input, setInput} = React.useContext(userContext)
    
    useEffect(() => {
     if(user){
         setInput(prev => ({...prev, sub: user.sub}))
     }
    },[user])

    useEffect(() => {
       if(input.direccion && input.email && input.nombre && input.zona && input.numero && input.sub){
        dispatch(postUser(input))
       }
    }, [input, dispatch])


    const handleInput = (e) => {
        setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const total = cart.map(p => p.unit_price)
    
    const priceProduct =   total.reduce((prev, curr) => {
     return prev + curr 
    }, 0)

    const handleZona = (e) => {
      setInput(prev => ({...prev, zona: e.target.value }))
    }



  return (
    <div  >
      <React.Fragment>
      <h3>Direccion de envio</h3>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="outlined"
            onChange={handleInput}
            value={input.nombre}
            color='success'
            focused
            
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
            variant="outlined"
            onChange={handleInput}
            color='success'
            
            
          />
        </Grid>
        <div style={{position: 'relative', left: '1rem'}}>
        <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Zona</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={input.zona}
          onChange={handleZona}
          label="zona"
          color='success'
          
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem  value='Belgrano'>Belgrano</MenuItem>
          <MenuItem value='San Isidro'>San Isidro</MenuItem>
          <MenuItem value='Martinez'>Martinez</MenuItem>
          <MenuItem value='Las Cañitas'>Las Cañitas</MenuItem>
        
        </Select>
      </FormControl>
        </div>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="numero"
            name="numero"
            label="Numero de celular"
            fullWidth
            autoComplete="shipping address-level2"
            variant="outlined"
            onChange={handleInput}
            value={input.numero}
            type='number'
            color='success'
            
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            onChange={handleInput}
            value={input.email}
            required
            color='success'
            sx={{input: {color: '#282828'}}}
          />
        </Grid>
       
      </Grid>
    </React.Fragment>
    </div>
  );
}