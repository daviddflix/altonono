import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, Img, MainContainer, NavLink } from "./styles";


export default function Categories(){

    const productos = useSelector(state => state.food)
    const dispatch = useDispatch()
   

    
  
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
           
           {
              productos? productos.map(p => {
                 return(
                   <NavLink key={p.id} to={`/detail/${p.id}`} style={{textDecoration:'none'}}>
                        <Container >
                    <div>
                    <h2>{p.description}</h2>
                    <p>$ {p.price}</p>
                    </div>
                    <Img src={`http://localhost:5000${p.image}`} />
                </Container>
                   </NavLink>
                 )
               }): <Loading/>
           }
        </MainContainer>
    )
}