import styled from 'styled-components';


export const MainContainer = styled.div`
 height: 100vh;
 width: 100%;


@media screen and (max-width:900px){
        height: 100%;
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        
       
}
`;

export const Form = styled.form`
 
        width: 100%;


@media screen and (max-width:600px){
        
        width: 95%;
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
 @media screen and (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
       
        padding: 15px;
        width: 100%;
        position: relative;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
        border-top: none;
        /* border-bottom:  1px solid #c1c1c1; */
        background-color: #fff;
        border-radius: 10px;
 }
`;

export const InputOptions = styled.input`
 @media screen and (max-width: 600px) {
        height: 22px;
        width: 22px;
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
        /* background-color: #ec7505; */
        color: #ff595a;
        background-color: #fff;
       
       
   }

`;


export const BoxComentario = styled.textarea`
 @media screen and (max-width: 900px) {
        padding: 30px;
        width: 100%;
        height: 8rem;
        background-color: #e5e5e5;
        border: 0;
        /* font-family: 'Roboto', sans-serif; */
        font-size: .9rem;
       font-weight: 800;
         
 }
`;

export const ButtonVerCarrito = styled.button`
 @media screen and (max-width: 900px) {
        padding: 20px 30px;
        margin-bottom: 2rem;
        background-color: #282828;
        color: #fff;
        border: none;
        margin-left: 1rem;
        border-radius: 5px;
        
         
 }
`;

export const PhotoProduct = styled.img`
 @media screen and (max-width: 900px) {
        width: 95vw;
        height: 280px;
        border-radius: 10px;
        margin-top: .5rem;

 }
`;


export const LabelProductName = styled.label`
 @media screen and (max-width: 600px) {
        
     &::first-line{
             border: none;
     }

 }
`;



