import { Button } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Swal from 'sweetalert2'
import { resetCart } from "../../redux/actions"

export default function Success (){

    const dispatch = useDispatch()

    useEffect(() => {
        Swal.fire({
            icon: 'success',
            title: 'Pedido Confirmado',
            text: "Nuestra camarera le acercara su pedido",
            showConfirmButton: true,
            // timer: 1500
            })
            dispatch(resetCart())
    })
    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%'}}>
        <Button variant='contained'>HOME</Button>
        </div>
    )
}