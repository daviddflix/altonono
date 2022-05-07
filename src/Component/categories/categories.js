import {  useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addItem, getProduct } from "../../redux/actions";
import Loading from "../spinner/spinner";
import { Container, Container_Info, Img, MainContainer, NavLink, Title } from "./styles";
import Rating from '@mui/material/Rating';



export default function Categories(){

    const productos = useSelector(state => state.food)
    const dispatch = useDispatch()
    const [value, setValue] = useState(5);
   

  //   const addItemToCart = (product) => {
  //     const inCart = productos.find(p => p.id === product.id)

  //     if (inCart){
  //         dispatch(addItem(inCart))
  //     }
  //     onClick={() => addItemToCart(p)} 
  // };

 
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
                        <Container_Info >
                          <Title>{p.description}</Title>
                             <Rating
                              name="size-small"
                              value={value}
                              onChange={(event, newValue) => {
                              setValue(newValue);
                              }}
                              />
                          <h4>$ {p.price}</h4>
                        </Container_Info>
                        <Img src={`https://hit-pasta.herokuapp.com/${p.image}`} />
                </Container>
                   </NavLink>
                 )
               }): <Loading/>
           }
          
        </MainContainer>
    )
}