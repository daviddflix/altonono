import { FacebookIcon, Header, InstagramIcon, MainContainer, ContainerInfo } from "./styles";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function Copyright() {
    return (
      <Typography variant="body2" color='#fff' align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          HIT PASTA
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }


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
          
          <ContainerInfo>
              <h4 style={{color: '#fff'}}>Productos</h4>
              <h4 style={{color: '#fff'}}>Trabaja con nosotros</h4>
              <h4 style={{color: '#fff'}}>Estamos abiertos todos los dias, de 12hs a 24hs</h4>
          </ContainerInfo>
             <Copyright/>
         </div>
     </MainContainer>
       
    )  
}