import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, ContainerInfo, Img, MainContainer, NavLink, Title } from "./styles";
import Rating from '@mui/material/Rating';



export default function Categories(){

    const productos = useSelector(state => state.food)
    const dispatch = useDispatch()
    const [value, setValue] = useState(5);
   
 
    useEffect(() => {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <MainContainer>
           
           {
              productos? productos.map(p => {
                 return(
                   <NavLink key={p.id}   to={`/detail/${p.id}`} style={{textDecoration:'none'}}>
                  <Container >
                        <ContainerInfo >
                          <Title>{p.title}</Title>
                             <Rating
                              name="size-small"
                              value={value}
                              onChange={(event, newValue) => {
                              setValue(newValue);
                              }}
                              />
                          <h4>$ {p.price}</h4>
                        </ContainerInfo>
                        <Img src={`https://hit-pasta.herokuapp.com/${p.picture.url}`} />
                </Container>
                   </NavLink>
                 )
               }): <Loading/>
           }
          
        </MainContainer>
    )
}