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

export const ContainerOption_ = styled.div`
 @media screen and (max-width: 600px) {
        display: flex;
        flex-direction: row;
        align-items: center ;
        justify-content: space-between;
       
        border-bottom: 1px solid gray;
        padding: 10px;
        width: 100%;
         
 }
`;

export const InputOptions = styled.input`
 @media screen and (max-width: 600px) {
        height: 20px;
        
         
 }
`;

export const MainBoxComentario = styled.div`

   @media screen and (max-width: 600px) {
        width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-bottom: 2rem;
        border-top: 1px solid grey;
        justify-content: flex-start;
       
   }

`;


export const BoxComentario = styled.input`
 @media screen and (max-width: 600px) {
        padding: 30px;
        width: 90%;

         
 }
`;



