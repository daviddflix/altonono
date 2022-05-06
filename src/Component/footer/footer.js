import { FacebookIcon, Header, Instagram, InstagramIcon, MainContainer } from "./styles";


export default function Footer (){
    return(
      
     <MainContainer>
         <Header>Hit Pasta</Header>
         <div>
             <h4>ENCONTRANOS EN LAS REDES</h4>
         <div>
             <a href="https://www.instagram.com/hitpasta/"><InstagramIcon/></a>
            <a href="https://www.facebook.com/hitpasta"><FacebookIcon/></a>
          </div>
          <div>
              <h3>Desarollado</h3>
          </div>
         </div>
     </MainContainer>
       
    )  
}