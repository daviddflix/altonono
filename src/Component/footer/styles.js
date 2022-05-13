import styled from 'styled-components';
import {FaInstagramSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

export const  MainContainer = styled.div`
    background-color: #000000;
    padding: 1rem;
    
`;


export const  Header = styled.h1`
  color: #fff;
  font-family: Asap Condensed ;
`;


export const  Instagram = styled(FaInstagramSquare)`

  width: 25px;
  height: 25px;
  margin: 1rem;
  border-radius: 40%;
  color: #ebb3a9
`;

export const  InstagramIcon = styled(BsInstagram)`
  width: 25px;
  height: 25px;
  border-radius: 5px;
  color: #ebb3a9
`;

export const FacebookIcon = styled(FaFacebookSquare)`
width: 25px;
height: 25px;
color: #ebb3a9
`;


export const ContainerInfo = styled.div`
   border: none;
  
`;