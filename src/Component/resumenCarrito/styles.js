import styled from 'styled-components';
import img from '../carousel/image/spaguetti 1500x.jpg';
import {AiOutlineClose} from 'react-icons/ai'

export const MainContainer = styled.div`
@media screen and (max-width: 900px){
 min-height: 70vh;
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
  border-radius: 10px;
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: row;
 border: 1px solid #ff595a;
 align-items: center;
 margin-bottom: 1rem;
 margin:1rem;
 /* box-shadow:  
             -20px -20px 60px #dddddd; */
 position: relative;
 border-radius: 10px;
 width: 90%;
 justify-content: center;
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
      
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 2rem;
        width: 40%;
        margin-bottom: 5rem;
        border-radius: 10px;
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
    

    @media screen and (max-width: 900px){
     position: absolute;
     top: -10px;
     right: 5px;
     border: none;
     margin-top: 1rem;
     width: 20px;
     height: 25px;
     box-shadow:  6px 6px 12px #bebebe,
             -6px -6px 12px #ffffff;
    border-radius: 40%;
   
    
   } 
`; 


export const ButtonVerCarrito = styled.button`
 @media screen and (max-width: 900px) {
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 1rem;
        width: 40%;
        margin-bottom: 5rem;
        border-radius: 10px;
       
         
 }
`;