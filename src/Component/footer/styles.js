import styled from 'styled-components';
import {FaInstagramSquare} from 'react-icons/fa'

export const  MainContainer = styled.div`
    background-color: #161a1d;
    padding: 1rem;
`;


export const  Header = styled.h1`
  color: #fff;
`;


export const  Instagram = styled(FaInstagramSquare)`
  color: #fff;
  background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285aeb 90%);
  width: 25px;
  height: 25px;
  margin: 1rem;
  border-radius: 40%;
  box-shadow: 0px 3px 10px rgba(0,0,0,25);
`;
