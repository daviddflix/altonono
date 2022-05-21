
import styled from 'styled-components'
import {IoCartOutline} from 'react-icons/io5'

export const MainContainer = styled.div`
    
width: 100%;
display: flex;
flex-direction: column;

@media screen and (max-width:900px){

width: 100%;
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
}
`;

export const Img = styled.img`

@media screen and (max-width:900px){
width: 100px;
height: 100%;

}
`;

export const ContainerInfo= styled.div`
@media screen and (max-width:900px){
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

}
`;

export const Title= styled.h4`
@media screen and (max-width:900px){
color: #282828;


width: 100%;

}
`; 

export const Container = styled.div`
@media screen and (max-width:900px){
 width: 80vw;
 box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
 display: flex;
 margin: 1rem;
 height: 150px;
 border-radius: 10px;
 align-items: center;
}
`;

export const ButtonAddToCart = styled.button`
@media screen and (max-width:900px){
    width: 50%;
    background-color: #282828;
    color: #fff;
    padding: 5px 10px;
    border: none;
    border-radius: 10px;
    margin-left: 15px;
    :hover{
        background-color: black;
    }
}
`;

export const Buttons = styled.button`
@media screen and (max-width:900px){
   
    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;

    :hover{
        background-color: black;
    }
}
`;

export const P = styled.p`
@media screen and (max-width:900px){
    background-color: #282828;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
}
`;

export const CartIcon = styled(IoCartOutline)`
@media screen and (max-width:900px){
    background-color: #282828;
    color: #fff;
    width: 22px;
    height: 22px;
    border: none;
    border-radius: 10px;
}
`;

export const SubTitle = styled.h4`
@media screen and (max-width:900px){

    color: #282828;
    position: relative;
    right: 6rem;
    margin: 10px;
}
`;