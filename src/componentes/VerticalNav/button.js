import { useContext } from 'react'
import navContext from '../context/navContext'
import './button.css'

export default function Button(){

    const {nav, setNav} = useContext(navContext)


    const showRoutes = (e) => {

        if(nav === true){
             setNav(!nav)
             document.getElementById("check").checked = false;
          }else{
            setNav(!nav)
            document.getElementById("check").checked = true;
          }
     }

    return(
        <label htmlFor="check" className="bar">
    <input id="check" onClick={showRoutes}  type="checkbox"/>

    <span className="top"></span>
    <span className="middle"></span>
    <span className="bottom"></span>
</label>
    )
}