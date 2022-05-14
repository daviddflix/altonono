import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";

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
        width: 130px;
        border-radius: 5px;
}
`;

export const Container = styled.div`
   
@media screen and (max-width:600px){
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-direction: row;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 110px;
    width: 100%;
    
    border-radius: 5px;
    
      
}
`;

export const ContainerInfo = styled.div`
   
@media screen and (max-width:600px){
   
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    
    
      
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
   
}
`;