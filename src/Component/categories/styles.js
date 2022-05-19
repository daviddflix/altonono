import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";
import {BsFillHeartFill} from 'react-icons/bs'

export const MainContainer = styled.div`
    
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:600px){
    
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   
    // background-color: #bcb8b1;
}
`;

export const Img = styled.img`
    height: 150px;
    width: 150px;
@media screen and (max-width:600px){
        height: 100px;
        width: 35%;
        border-radius: 5px;
        position: relative;
        left: 5px;
       
}
`;

export const Container = styled.div`
   
@media screen and (max-width:600px){
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-direction: row;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 110px;
    width: 90%;
    position: relative;
    border-radius: 5px;
    
      
}
`;

export const ContainerInfo = styled.div`
   
@media screen and (max-width:600px){
   
    flex-direction: column;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    right: 3.5rem;
    
    
      
}
`;

export const NavLink = styled(Link)`
    
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:900px){
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1rem;
    width: 100vw;
}
`;



export const Title = styled.h2`
   

@media screen and (max-width:900px){
    color: black;
    font-size: 1rem;
   margin-top: 1rem;
}
`;

export const Like = styled(BsFillHeartFill)`
   

@media screen and (max-width:900px){
    position: absolute;
    top: 5px;
    right: 5px;
    color: #ff595a;
    border-color:  #ff595a;
   
}
`;

export const Menu = styled.div`
   

@media screen and (max-width:900px){
    display: flex;
    width: 100%;
    justify-content: space-around;
    height: 80px ;
    align-items: center;
   
   
}
`;

export const Ul = styled.ul`
   

@media screen and (max-width:900px){
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-decoration: none;
    position: relative;
    right: 1.5rem;
    width: 100%;
}
`;

export const Li = styled.input`
   

@media screen and (max-width:900px){
    display: flex;
    align-items: center;
    justify-content: space-around;
    text-decoration: none;
    margin-left: 1rem;
    width: 100%;
    border: 1px solid #ff595a;
    border-radius: 10px;
    padding: 10px;
    color: #282828;
    background-color: #fff;

    &:hover{
      background-color: #ff595a;
      color: #fff;
    }

   :active{
       background-color: #ff595a;
      color: #fff;
   }

}
`;



