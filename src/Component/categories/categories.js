import { useCallback, useState } from "react";
import Dessert from "./dessert";
import Pastas from "./pastas";
import { Li, Menu, Ul } from "./styles";

export default function Categories () {


    const [product, setProduct] = useState('pastas')
    

     const handleProducts = (e) => {
         setProduct(e.target.id)
     }

    return(
        <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
       <Menu>
        <Ul>
          <Li sel type='button' id='pastas' value='Pastas' placeholder="Pastas"  onClick={handleProducts}/>
          <Li  type='button'  id='postres' value='Postres' placeholder="Postres"  onClick={handleProducts}/>
          <Li type='button' id='bebidas' value='Bebidas' placeholder="Bebidas"  onClick={handleProducts}/>
        </Ul>        
      </Menu>
        {
            product === 'pastas' && <Pastas/>
        }
        {
            product === 'postres' && <Dessert/>
        }
        </div>
    )
}