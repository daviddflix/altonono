import { Button } from "@mui/material"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2'
import { resetCart } from "../../redux/actions"

export default function Success (){

    const dispatch = useDispatch()
    const history = useHistory()

    const back = () => {
        history.push('/')
    }

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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', width: '90%', justifyContent: 'center'}}>
        <Button onClick={back} size='large' variant='contained'>HOME</Button>
        </div>
    )
}