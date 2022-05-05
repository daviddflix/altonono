import styled from 'styled-components'
import { IoCartOutline} from 'react-icons/io5'
import { NavLink } from "react-router-dom";
import { AiOutlineMenu} from 'react-icons/ai'
import {HashLink} from 'react-router-hash-link'



export const  MainContainer = styled.div`
    width: 100%;
    height: 60px;
    background-color: #ffff;
    border-bottom: 1px solid ;
    border-color: #b7b7a4;
   
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-around;
  align-items: center;

 
`;

export  const MobileIcon = styled(AiOutlineMenu)`

    display: none;
   
    @media screen and (max-width: 600px ) {
        width: 20px;
        height: 20px;
        display: block;
}
`;

export const LinkLogo = styled(NavLink)`
    
   text-decoration: none;
   color: black;

    @media screen and (max-width: 600px) {
       display: flex;  
       flex-direction : row;
       justify-content: center;
       align-items: center;
}
`;

export const ImgLogo = styled.img`
    
   text-decoration: none;
   color: black;

    @media screen and (max-width: 600px) {
       border-radius: 50% ;
       height: 2rem;
       width: 2rem;
       margin-right: 5px;
       z-index: 10;

}
`;



export const Cart = styled(IoCartOutline)`

width: 20px;
height: 20px;
display: block;
overflow: hidden;
   
    @media screen and (max-width: 600px ) {
        width: 20px;
        height: 20px;
        display: block;
}
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    height: 90%;
    overflow: hidden;


   @media screen and (max-width: 600px){
    position: absolute;
    top: 44px;
    width: 60%;
    height: 90vh;
    flex-direction: column;
    border: 1px solid #b7b7a4;
    transition: 0.5s all ease;
    background-color: #fff;
    left: ${({open}) => open? "0" : "-100%"} ;
    z-index: 50;
   }
`;   
  

export const ContainerRutas = styled.li`

  
 
 
  width: 100%;

  @media screen and (max-width:600px){
        position: relative;
        right:2.7rem ; 
        height: 40px;
        width: 100%;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        
       
        
       
       
     
  }
`;

export const Link = styled(NavLink)`
    
    

    @media screen and (max-width:600px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: black;
        padding: 10px;
        font-weight: 600;
        text-decoration: none;
        height: 100%;
       

        
       
    }
`;

export const RedirectLink = styled(HashLink)`
    
    text-decoration: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: black;
    padding: 10px;
    font-weight: 600;
    height: 100%;
   

    @media screen and (max-width:600px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        color: black;
        padding: 10px;
        font-weight: 600;
       

      
       
    }
`;


export const MenuCart = styled.ul`
    display: flex;
    list-style: none;
    /* justify-content: space-around; */
    height: 100%;

   @media screen and (max-width: 600px){
    position: absolute;
    top: 44px;
    // border: 1px solid black; 
    width: 70%;
    height: 90vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: 0.5s all ease;
    background-color: #fff;
    top: ${({open}) => open? "44px" : "-300%"} ;
    right: 0;
    z-index: 50;
    border: 1px #ade8f4 solid;
   }
`; 




