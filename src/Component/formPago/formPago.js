import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {  getLinkPayment, postUser } from "../../redux/actions";
import { useHistory } from "react-router-dom";


export default function FormPago (){

    const { user } = useAuth0();
    let cart = useSelector(state => state.cart);

    let link = useSelector(state => state.link);
    const dispatch = useDispatch()
    const history = useHistory()

    const [input, setInput] = useState({
        nombre: "",
        direccion: "",
        numero: "",
        email: "",
        sub: ""
    })

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
        dispatch(getLinkPayment(cart))
       
    }

    const handleInput = (e) => {
        setInput(prev=> ({...prev, [e.target.name]: e.target.value}))
    }

    const total = cart.map(p => p.unit_price)
    
    const priceProduct =   total.reduce((prev, curr) => {
     return prev + curr 
    }, 0)
    return(
        <div>
            <form onSubmit={(e) => submitform(e)}>
               <div>
                <label>Nombre</label>
               <input type='text' name="nombre" placeholder='Ingresa tu nombre' value={input.nombre} onChange={handleInput}/>
               </div>

               <div>
                <label>Direccion</label>
               <input type='text' name="direccion" placeholder='Ingresa tu direccion' value={input.direccion} onChange={handleInput}/>
               </div>

               <div>
                <label>Numero</label>
               <input type='text'name="numero" placeholder='Ingresa tu numero' value={input.numero} onChange={handleInput}/>
               </div>

               <div>
                <label>Email</label>
               <input type='text' name='email' placeholder='Ingresa tu email' value={input.email} onChange={handleInput}/>
               </div>



               <input disabled={true} value={priceProduct}/>
                <button type="submit">PROCEDER AL PAGO</button>
            </form>
            <a href={link}>PAGO</a>
        </div>
    )
}