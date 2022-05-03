import {  useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProduct } from "../../redux/actions"
import { MainContainer } from "./styles"


export default function DetailProduct(){

    
     const dispatch = useDispatch()
     const detail = useSelector(state => state.food)
      console.log(detail)
     useEffect(() => {
         dispatch(getProduct())
     }, [])
    
    return(
        <MainContainer>
            <h1>{detail.description[0]}</h1>
        </MainContainer>
    )
}