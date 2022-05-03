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
       display: block;
}
`;

export const Cart = styled(IoCartOutline)`

    display: none;
   
    @media screen and (max-width: 600px ) {
        width: 20px;
        height: 20px;
        display: block;
}
`;

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    /* justify-content: space-around; */
    height: 100%;

   @media screen and (max-width: 600px){
    position: absolute;
    top: 45px;
    /* border: 1px solid black; */
    width: 70%;
    height: 90vh;
    /* justify-content: center; */
    align-items: flex-start;
    flex-direction: column;
    transition: 1s all ease;
    background-color: #fff;
    left: ${({open}) => open? "0" : "-100%"} ;
    z-index: 50;
   }
`;   
  

export const ContainerRutas = styled.li`

  height: 100%;

  @media screen and (max-width:600px){
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 30px;
        position: relative;
        right: 1.9rem;
        padding: 6px;
        border-bottom: 1px solid #b7b7a4;
        width: 100%;
        
       
        
       
       
     
  }
`;

export const Link = styled(NavLink)`
    
    text-decoration: none;

    @media screen and (max-width:600px){
        display: flex;
        justify-content: center;
        align-items: center;
        color: hotpink;
        padding: 10px;
        font-weight: 600;
       
       

        &:hover{
            background-color: black;
            color: hotpink;
        }
       
    }
`;

export const RedirectLink = styled(HashLink)`
    
    text-decoration: none;

    @media screen and (max-width:600px){
        display: flex;
        justify-content: center;
        align-items: center;
        color: hotpink;
        padding: 10px;
        font-weight: 600;
       

        &:hover{
            background-color: black;
            color: hotpink;
        }
       
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
    transition: 1s all ease;
    background-color: #fff;
    top: ${({open}) => open? "45px" : "-100%"} ;
    right: 0;
    z-index: 50;
   }
`; 




