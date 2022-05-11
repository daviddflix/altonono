import styled from 'styled-components';


export const MainContainer = styled.div`
 height: 100vh;
 width: 100%;


@media screen and (max-width:600px){
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
}
`;

export const Form = styled.form`
 
        width: 100%;


@media screen and (max-width:600px){
        
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
}
`;


export const Input = styled.input`
        height: 100vh;
        width: 100%;

@media screen and (max-width:600px){
        height: 30px;
        width: 100%;
      
       
}
`;

export const ContainerOption = styled.div`
 
 @media screen and (max-width: 600px){
         display: flex;
         flex-direction: column;
         align-items: flex-start;
         width: 100%;
        
 }
`;

export const ContainerOptionChild = styled.div`
 @media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        border-bottom: 1px solid #fff;
        padding: 10px;
        width: 100%;
        position: relative;
 }
`;

export const InputOptions = styled.input`
 @media screen and (max-width: 600px) {
        height: 20px;
        width: 20px;
        position: absolute;
        left: 20rem;
        border: none;
        display: block;
        top: .4rem;
        color: green;
         
 }
`;

export const MainBoxComentario = styled.div`

   @media screen and (max-width: 600px) {
        width: 90vw;
         
        margin-bottom: 2rem;
         display: flex;
        flex-direction: column;
        align-items: center; 
       
   }

`;



export const BoxTitleAndPhoto = styled.div`

   @media screen and (max-width: 600px) {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding-left: 20px;
       
       
   }

`;


export const BoxComentario = styled.input`
 @media screen and (max-width: 600px) {
        padding: 30px;
        width: 90%;
        
        &::placeholder{
                text-align: top;
                
        }
         
 }
`;

export const ButtonVerCarrito = styled.button`
 @media screen and (max-width: 600px) {
        padding: 20px 30px;
        margin-bottom: 2rem;
        background-color: black;
        color: #fff;
        border: none;
        margin-left: 1rem;
        
         
 }
`;

export const PhotoProduct = styled.img`
 @media screen and (max-width: 600px) {
        width: 150px;
        height: 100px;
        border-radius: 5px;
        position: absolute;
        top: 8rem;
        right: 3rem;
         
 }
`;



