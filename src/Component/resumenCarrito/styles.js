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
 background-color: #f3fbfb;
 margin-top: 60px;
}
`;

export const Img = styled.img`
@media screen and (max-width: 900px){
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 110px;
  border-radius: 10px;
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: row;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 align-items: center;
 margin:1rem;
 background-color: #fff;
 position: relative;
 border-radius: 10px;
 width: 370px;
 justify-content: center;
 border: none;
 height: 200px;

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
  margin: 0;
  
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
     top: -12px;
     right: 0;
     border: none;
     margin-top: .8rem;
     width: 25px;
     height: 25px;
     padding: 4px;
     /* box-shadow:  6px 6px 12px #bebebe,
             -6px -6px 12px #ffffff; */
    border-radius: 0 10px 0 10px;
    background-color: #282828;
    color: #fff;
   
    
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