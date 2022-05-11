import { FacebookIcon, Header, InstagramIcon, MainContainer } from "./styles";


export default function Footer (){
    return(
      
     <MainContainer>
         <Header>Hit Pasta</Header>
         <div>
             <h4 style={{color: '#fff'}}>ENCONTRANOS EN LAS REDES</h4>
         <div>
             <a style={{marginRight: '10px'}} href="https://www.instagram.com/hitpasta/"><InstagramIcon/></a>
            <a href="https://www.facebook.com/hitpasta"><FacebookIcon/></a>
          </div>
         
         </div>
     </MainContainer>
       
    )  
}