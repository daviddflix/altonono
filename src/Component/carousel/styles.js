
import {  ButtonBack, ButtonNext } from 'pure-react-carousel';
import styled from 'styled-components';

export const  ArrowLeft = styled(ButtonBack)`


@media screen and (max-width: 600px ) {
    position: absolute;
    top: 0;
    left: 0;
    height: 70%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;

export const  ArrowRight = styled(ButtonNext)`


@media screen and (max-width: 600px ) {
    position: absolute;
    top: 0;
    right: 10px;
    height: 70%;
    width: 0;
    background-color: transparent;
    border: none;
}
`;