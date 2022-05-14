import styled from 'styled-components';
import img from '../carousel/image/spaguetti 1500x.jpg';
import {AiOutlineClose} from 'react-icons/ai'

export const MainContainer = styled.div`
@media screen and (max-width: 900px){
 min-height: 50vh;
 display: flex;
 flex-direction: column;
 justify-content: space-around;
 align-items: center;
}
`;

export const Img = styled.img`
@media screen and (max-width: 900px){
  width: 30%;
  height: 40%;
  position: relative;
  left: 1rem;
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: row;
 /* border-bottom: 1px solid #dddddd; */
 align-items: center;
 margin-bottom: 1rem;
 margin:0;
 box-shadow:  
             -20px -20px 60px #dddddd;
 position: relative;
}
`;

export const ContainerProduct = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 margin: 0;
 width: 70%

}
`;

export const BtnFinalizarCompra = styled.button`
@media screen and (max-width: 900px){

  padding: 20px 30px;
        /* margin: 2rem; */
        background-color: black;
        color: #fff;
        border: none;
        margin-left: 1rem;
        width: 50%;
}
`;


export const Title = styled.img`
@media screen and (max-width: 900px){

  background-image:url(${img}) ;
  width: 100%;
  height: 100px;
}
`;

export const Flex = styled.div`
@media screen and (max-width: 900px){

  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  
}
`;

export const FlexOptions = styled.div`
@media screen and (max-width: 900px){

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
 
  margin: 0;
}
`;

export const ButtonItemDelete = styled(AiOutlineClose)`
    

    @media screen and (max-width: 700px){
     position: absolute;
     top: -10px;
     right: 5px;
     border: none;
     margin-top: 1rem;
    
   } 
`; 
