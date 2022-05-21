import { MainContainer, ContainerInfo, Img } from "./styles";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import logo from './Images/logo.png'


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
       
         {/* <ContainerIcons>
             <a href="https://www.instagram.com/hitpasta/"><InstagramIcon/></a>
             <a href="https://www.facebook.com/hitpasta"><FacebookIcon/></a>
          </ContainerIcons> */}
          <Img src={logo} alt='logo' />
          
          <ContainerInfo>
              <h4>Estamos abiertos todos los dias, de 12hs a 24hs</h4>
          </ContainerInfo>

             <Copyright/>
        
     </MainContainer>
       
    )  
}