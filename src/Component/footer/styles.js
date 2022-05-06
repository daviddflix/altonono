import styled from 'styled-components';
import {FaInstagramSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {FaFacebookSquare} from 'react-icons/fa'

export const  MainContainer = styled.div`
    background-color: #161a1d;
    padding: 1rem;
`;


export const  Header = styled.h1`
  color: #fff;
  font-family: Lobster ;
`;


export const  Instagram = styled(FaInstagramSquare)`

  width: 25px;
  height: 25px;
  margin: 1rem;
  border-radius: 40%;
`;

export const  InstagramIcon = styled(BsInstagram)`
  width: 25px;
  height: 25px;
  border-radius: 5px;
`;

export const FacebookIcon = styled(FaFacebookSquare)`
width: 25px;
height: 25px;
`;
