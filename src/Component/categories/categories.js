import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, Img, MainContainer, NavLink, Title } from "./styles";


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
                    <Title>{p.description}</Title>
                    <p>$ {p.price}</p>
                    </div>
                    <Img src={`https://hit-pasta.herokuapp.com/${p.image}`} />
                </Container>
                   </NavLink>
                 )
               }): <Loading/>
           }
        </MainContainer>
    )
}