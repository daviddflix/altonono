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
     margin: .6rem;
     border-radius: 10px;
   } 
`; 

export const ButtonItemDelete = styled(AiOutlineClose)`
    

    @media screen and (max-width: 700px){
     position: absolute;
     color: #fff;
     top:  -15px;
     width: 20px;
     padding: 5px;
     height: 20px;
     right: 0px;
     border-radius: 0 10px 0px 10px;
     border: none;
     margin-top: 1rem;
     background-color: #282828;
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
     border-radius: 10px;
    
     
     
     
  }
`;

export const ContainerProductGeneral = styled.div`
@media screen and (max-width: 700px){
   
   
  overflow-y: scroll;
   
}
`;

export const ContainerProduct = styled.div`
  @media screen and (max-width: 900px){
     position: relative;
     right: 2.2rem;
     width: 50%;
     margin-right:2.2rem ;
     
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
    

    @media screen and (max-width: 900px){
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


export const ContainerSubtotal = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 justify-content: space-around;
 border-top: 1px solid #c1c1c1;
 height: 40px;
}
`;

export const P = styled.p`
@media screen and (max-width: 900px){
 font-size: 10px;
 margin: 0;
}
`;

export const H5 = styled.h5`
@media screen and (max-width: 900px){
  margin: 0;
  width: 150px;
}
`;

export const Quantity= styled.h5`
@media screen and (max-width: 900px){
  position: absolute;
  right: -2.5rem;
  top: .5rem;
  border-radius: 10px;
  background-color: #282828;
  border: none;
  color: #fff;
  width: 20px;
  height: 20px;
  
  padding: 4px;
  margin: 0;
}
`;

