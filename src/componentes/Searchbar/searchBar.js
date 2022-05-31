import { FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useContext } from 'react';
import cartContext from '../context/cartContext';


export default function SearchBar(){



  const {categories, setCategories} = useContext(cartContext)
 
    const handleChange = (event) => {
        setCategories(event.target.value);
    };

    const styles = theme => ({
      dropdown: {
        backgroundColor: '#c1c1c1'
      }
    })

    return(
        <div>
        <FormControl variant='filled' size='small' sx={{ m: 1, minWidth: 320 }}>
            <InputLabel id="demo-simple-select-helper-label">Todas las Categorias</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={categories}
          label="categories"
          onChange={handleChange}
          MenuProps={{PaperProps:{
            sx: {
              bgcolor: 'rgba(0,0,0,0.90)',
              color: '#fff'
            }
          }}}
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          <MenuItem value={'bebidas'}>Bebidas</MenuItem>
          <MenuItem value={'Cervezas'}>Cervezas</MenuItem>
          <MenuItem value={'Espirituosas'}>Espirituosas</MenuItem>
          <MenuItem value={'Ensaladas'}>Ensaladas</MenuItem>
          <MenuItem value={'Postres'}>Postres</MenuItem>
          <MenuItem value={'Kiosco'}>Kiosco</MenuItem>
          <MenuItem value={'Vinos'}>Vinos</MenuItem>
          <MenuItem value={'Comidas'}>Comidas</MenuItem>
        </Select>
        </FormControl>
        </div>
    )
}