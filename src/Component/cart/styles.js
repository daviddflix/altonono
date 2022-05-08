import styled from 'styled-components';
import {AiFillCloseCircle} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'

const query = '800px'

export const BoxNoItem = styled.div`
  

    @media screen and (max-width: 700px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      height: 100vh;
     
     
   } 
`; 

export const BoxItems = styled.div`
  @media screen and (max-width: 700px){
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-items: flex-start;
  }
`;


export const Button = styled.button`
    

    @media screen and (max-width: 700px){
     padding: 10px;
     color: #fff;
     background-color: #e63946;
     border: none;
     margin-top: .6rem;
   } 
`; 

export const ButtonItemDelete = styled(AiOutlineClose)`
    

    @media screen and (max-width: 700px){
     position: absolute;
     color: black;
     top: -10px;
     right: 5px;
     border: none;
     margin-top: 1rem;
   } 
`; 

export const ContainerButtons = styled.div`
    

    @media screen and (max-width: 700px){
     position: absolute;
     bottom: 0;
     display: flex;
     flex-direction: column;
     width: 70%;
    
   } 
`; 


export const ButtonClose = styled(AiFillCloseCircle)`
    

    @media screen and (max-width: 700px){
     position: relative;
     
     left: 12px;
     color: #e63946;
     height: 20px;
     width: 20px


    
   } 
`; 


export const Img = styled.img`
    

    @media screen and (max-width: 700px){
      width: 100%;
      height: 100%;
      border-radius: 5px;
      position: relative;
      right: 2rem;
   } 
`; 

export const Container = styled.div`
  @media screen and (max-width: 700px){
     display: flex;
     flex-direction: row;
     box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
     padding: 10px 2rem 10px 2rem;
     border-radius: 5px;
     align-items: center;
     position: relative;
    
   
     height: 60px;
     width: 100%;
     margin-bottom: 1rem;
     
  }
`;

export const ContainerProduct = styled.div`
  @media screen and (max-width: 700px){
     
     margin-left: 1rem;
     ;
  }
`;

export const ContainerButtonAndTitle = styled.div`
    

    @media screen and (max-width: 700px){
      width: 70%;
      height: 40px;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
     display:flex;
     justify-content: space-around;
     align-items: center;
     position: absolute;
     top: 0;
     
     
   } 
`; 
