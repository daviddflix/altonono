import styled from 'styled-components'
import {MdOutlinePayment} from 'react-icons/md'
import {BsFillGeoAltFill} from 'react-icons/bs'
import {FaMoneyBillWave} from 'react-icons/fa'

export const  MainContainer = styled.div`


    @media screen and (max-width: 600px ) {
    background-color: #bcb8b1;
    padding: 1rem;
   }
`;

export const  Container = styled.div`
  @media screen and (max-width: 600px ) {
    margin: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
   }
 
`;



export const  Text = styled.h4`

  @media screen and (max-width: 600px ) {
    color: black;
    font-size: 15px;
   }
`;

export const  Anchor = styled.a`

@media screen and (max-width: 600px ) {
  /* text-decoration: none; */
  display: flex;
  align-items: center;
   }
`;

export const IconMap = styled.img`
    width: 19px;
    height: 19px;
    margin: 10px;
`;

export const  IconPayment = styled(MdOutlinePayment)`
   width: 50px;
   height: 50px;
   color: black;

   @media screen and (max-width: 600px ) {
      width: 30px;
      height: 30px;
      color: black;
}
`;

export const  IconGeo = styled(BsFillGeoAltFill)`
   width: 30px;
   height: 30px;
   color: black;
`;

export const  HeaderPi = styled.h4`
    color: black;
    font-size:  20px;

  @media screen and (max-width: 600px ) {
    color: black;
    font-size: 10px;
}
`;



export const  MoneyIcon = styled(FaMoneyBillWave)`


    @media screen and (max-width: 600px ) {
      color: green;
      width: 40px;
      height: 40px;
   }
`;


export const  MercadoPagoIcon = styled.img`


    @media screen and (max-width: 600px ) {
      margin-right: 15px;
      width: 40px;
      height: 40px;
   }
`;


