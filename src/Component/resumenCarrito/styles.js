import styled from 'styled-components';
import img from '../carousel/image/spaguetti 1500x.jpg'

export const MainContainer = styled.div`
@media screen and (max-width: 900px){
 min-height: 70%;

}
`;

export const Img = styled.img`
@media screen and (max-width: 900px){
  width: 30%;
  height: 100%;
  
} 
`; 

export const Container = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: row;
 border: 1px solid black;
 /* padding: 10px 2rem 10px 2rem;
 border-radius: 5px; */
 align-items: center;
 margin-bottom: 1rem;
 /* justify-content: space-between; */
 
}
`;

export const ContainerProduct = styled.div`
@media screen and (max-width: 900px){
 display: flex;
 flex-direction: column;
 margin-left: 1rem;

}
`;

export const BtnFinalizarCompra = styled.button`
@media screen and (max-width: 900px){

  padding: 20px 30px;
        /* margin: 2rem; */
        background-color: black;
        color: #fff;
        border: none;
        margin-left: 1rem;
        
}
`;


export const Title = styled.img`
@media screen and (max-width: 900px){

  background-image:url(${img}) ;
  width: 100%;
  height: 100px;
}
`;

export const Flex = styled.div`
@media screen and (max-width: 900px){

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
`;