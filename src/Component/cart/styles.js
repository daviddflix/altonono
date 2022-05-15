import styled from 'styled-components';
import {AiFillCloseCircle} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'


export const BoxNoItem = styled.div`
  

    @media screen and (max-width: 700px){
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      height: 70vh;
     
     
   } 
`; 

export const BoxItems = styled.div`
  @media screen and (max-width: 700px){
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     
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
     right: 2rem;
     width: 80%;
    
   } 
`; 


export const ButtonClose = styled(AiFillCloseCircle)`
    

    @media screen and (max-width: 900px){
     position: relative;
     
     left: -3px;
     color: #e63946;
     height: 20px;
     width: 20px


    
   } 
`; 


export const Img = styled.img`
    

    @media screen and (max-width: 700px){
      width: 50%;
      height: 100%;
      border-radius: 5px;
      position: relative;
      right: 2rem;
   } 
`; 

export const Container = styled.div`
  @media screen and (max-width: 700px){
     
     
     /* padding: 20px 2rem 10px 2rem; */
     margin-bottom: 5px; 
     display: flex;
     flex-direction: row;
     height: 60px;
     width: 200px;
     box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
     align-items: center;
     position: relative;
    
     
     
     
  }
`;

export const ContainerProductGeneral = styled.div`
@media screen and (max-width: 700px){
   
   
  overflow-y: scroll;
   
}
`;

export const ContainerProduct = styled.div`
  @media screen and (max-width: 900px){
     
     margin-right: 2rem;
     width: 50%;
  }
`;

export const ContainerButtonAndTitle = styled.div`
    

    @media screen and (max-width: 700px){
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #f5f6f8;
     display:flex;
     justify-content:  space-between;
     align-items: center;
     
     margin-bottom: 8px;
     position: absolute;
     top: 0;
     right: 0
     
   } 
`; 

export const ContainerButtonAndTitleRelative = styled.div`
    

    @media screen and (max-width: 700px){
      width: 100%;
      height: 40px;
      border-bottom: 1px solid #f5f6f8;
     display:flex;
     justify-content: space-between;
     align-items: center;
     
     margin-bottom: 8px;
     position: relative;
     right: 1rem;
     
   } 
`; 
