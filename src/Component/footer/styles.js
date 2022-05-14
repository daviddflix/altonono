import styled from 'styled-components';
import {FaInstagramSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

export const  MainContainer = styled.div`
    background-color: #111111;
    padding: 1rem;
    margin-top: 2rem;
    position: relative;
`;


export const  Header = styled.h1`
  color: #fff;
  font-family: Asap Condensed ;
  position: absolute;
  top: -1rem;
  left: .2rem;
  margin-bottom: 1rem;
  font-size: 1.4rem;
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
  color: #fff
`;

export const FacebookIcon = styled(FaFacebookSquare)`
width: 25px;
height: 25px;
color: #fff
`;


export const ContainerInfo = styled.div`
   border: none;
  
`;