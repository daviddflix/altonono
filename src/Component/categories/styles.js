import styled from 'styled-components'
import { NavLink as Link } from "react-router-dom";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:600px){
    height: 100vh;
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5rem;
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
    width: 90%;
    
      
}
`;

export const NavLink = styled(Link)`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;

@media screen and (max-width:600px){
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
   
}
`;



export const Title = styled.h2`
   

@media screen and (max-width:600px){
    color: black;
    font-size: 1rem;
   
}
`;