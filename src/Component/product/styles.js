import styled from 'styled-components';
import { NavLink as Link} from "react-router-dom";

export const Titulo = styled.p`
	

	@media screen and (max-width: 600px ) {
	font-size: 18px;
	font-weight: 700;
	text-transform: uppercase;
	margin-bottom: 10px;
}
`;


export const  MainContainer = styled.div`


@media screen and (max-width: 600px ) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
`;

export const  Menu = styled.div`


@media screen and (max-width: 600px ) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    /* background-color: #161a1d; */
}
`;


export const  NavLink = styled(Link)`


@media screen and (max-width: 600px ) {
   text-decoration: none;
   padding: 3px;
   text-transform: uppercase;
   color: #161a1d;
   font-size: 15px;
   margin: 1rem;
   border: none;
   -webkit-box-sizing: border-box;
   


   &:hover{
    border-bottom: 1px solid black;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;

   }
}
`;

export const TextoSlide = styled.div`
	
	@media screen and (max-width: 600px) {
		background: #fff;
		color: '#fff';
		width: 100%;
		padding: 1px ;
		text-align: center;
		position: relative;
		bottom: 0;
        margin-bottom: 3rem;
        
	} 
`;



export const  ContainerButton = styled.div`


@media screen and (max-width: 600px ) {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 1rem;
}
`;

export const  Buttons = styled.div`


@media screen and (max-width: 600px ) {
  display: flex;
  justify-content: center;
  align-items: center;
}
`;

export const  Text = styled.h3`


@media screen and (max-width: 600px ) {
  color: black;
}
`;

export const  ButtonAddToCart = styled(Link)`


@media screen and (max-width: 600px ) {
    color: #fff;
    padding: 8px;
    font-size: 14px;
    border: none;
    background-color: black;
    margin-left: 19px;
    text-decoration: none;
    /* width: ; */

    &:hover{
        background-color: black;
        color: #fff;
    }
}
`;

export const  Arrow = styled.button`


@media screen and (max-width: 600px ) {
    color: black;
    padding: 5px 10px 5px 10px;
    border: 1px solid black;
    background-color: #fff;

    &:hover{
        background-color: black;
        color: #fff;
    }
}
`;

export const  ProductNumber = styled.p`


@media screen and (max-width: 600px ) {
    color: black;
    padding: 5px 10px 5px 10px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    background-color: #fff;
    font-size: 13px;
   

   
}
`;