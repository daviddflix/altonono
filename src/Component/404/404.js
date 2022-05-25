
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom';
import { Div } from './styles';

export default function NoMatch(){

    const history = useHistory()

  const handleButtonPress = () => {
      history.push('/')
  }

    return(
        <Div>
           
            <h1 style={{fontSize: '6rem'}}>404</h1>
            <h3>Page not found</h3>
            <Button
            variant='contained'
            color='primary'
            onClick={handleButtonPress}>
            Volver a Home
            </Button>
        </Div>
    )
}