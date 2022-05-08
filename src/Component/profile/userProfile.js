import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions";
import { ContainerInfo, MainContainer, MainContainerInfo, ProfilePicture } from "./styles";
import TextField from '@mui/material/TextField';
import { useAuth0 } from "@auth0/auth0-react";
import Typography from '@mui/material/Typography';


export default function UserProfile(){

    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
  
    const { isAuthenticated, user } = useAuth0();
    console.log(user)


//     useEffect(() => {
//         dispatch(getUser())
// }, [])

   return(
       <MainContainer>
           {
              isAuthenticated && (
                  <div>
                       <Typography variant="h4" align='center' gutterBottom component="div" sx={{ m: 2 }}>
                        MI PERFIL
                       </Typography>
                       <div>
                           <ProfilePicture src={user.picture} alt='picture'/>
                           <h4>{user.name}</h4>
                       </div>
                       <MainContainerInfo>
                            <ContainerInfo>
                                <TextField
                                                                 
                                    id="standard-required"
                                    label="Name"
                                    value={user.given_name? user.given_name: user.name }
                                    variant="outlined"
                                    color='success'
                                />
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextField
                                                                 
                                    id="standard-required"
                                    label="Last Name"
                                    value={user.family_name? user.family_name: user.name}    
                                    variant="outlined"
                                    color='success' 
                                />
                            </ContainerInfo>

                            <ContainerInfo>
                                <TextField                               
                                    id="standard-required"
                                    label="Mail"
                                    value={user.email}    
                                    variant="outlined"
                                    color='success' 
                                />
                            </ContainerInfo>


                          

                       </MainContainerInfo>
                  </div>
              ) 
          } 
         

       </MainContainer>
   )
}