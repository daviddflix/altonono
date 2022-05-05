import styled from 'styled-components';


export const MainContainer = styled.div`
 height: 100vh;
 width: 100%;


@media screen and (max-width:600px){
        height: 100vh;
        width: 100%;

}
`;

export const Form = styled.form`
 height: 100vh;
 width: 100%;


@media screen and (max-width:600px){
        height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin-left: 2rem;

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