import { useContext } from 'react'
import {  useHistory } from 'react-router-dom'
import navContext from '../context/navContext'
import s from './vertical.module.css'
import {MdRestaurantMenu} from 'react-icons/md'
import {IoPersonCircle} from 'react-icons/io5'
import {MdOutlineArrowForwardIos} from 'react-icons/md'
import image from '../Assets/feld.jpg'

export default function VerticalNav(){

    const {nav, setNav} = useContext(navContext);
    // const wrapperRef = useRef(null);
    const history = useHistory();


//     const handleClickOutside = useCallback((event) => {
//         if(nav === true && wrapperRef.current && !wrapperRef.current.contains(event.target)){
//             setNav(!nav)
//             const body = document.body.style
//             body.overflow='visible'
//             body.pointerEvents='auto'
//             }
  
//         if (wrapperRef.current && wrapperRef.current.contains(event.target)) {
//             const body = document.body.style
//             body.overflow='visible'
//             body.pointerEvents='auto'
//             }
//    }, [nav]) 

//    useEffect(() => {
//     document.addEventListener('mousedown', handleClickOutside, true);
   
// }, [nav, handleClickOutside]);

// useEffect(() => {
        
//     if(nav){   
       
//         const body = document.body.style
//         body.overflow='hidden'
//         body.zIndex=10
//         body.pointerEvents='none'  
//         document.getElementById('nav').style.pointerEvents='auto'  
//         document.getElementById('nav').style.overflow='visible'
//     }
  
   
// }, [nav])

const route1 = () => {
    history.push('/')
    setNav(!nav)
    document.getElementById("check").checked = false;
}

const route2 = () => {
    history.push('/history')
    setNav(!nav)
    document.getElementById("check").checked = false;
}

    return(
        <div id='nav' style={nav === false? {left: '-1000%'}: {left: 0}}  className={s.main}>
            <div style={{width: '100%'}}>
            <div onClick={route1} className={s.containerRoutes}>
               <div className={s.subcontainer}>
                    <MdRestaurantMenu className={s.icon}/>
                    <h3 className={s.link} >Menu</h3>
              </div>
              <MdOutlineArrowForwardIos className={s.arrow}/>
           </div>
           <div onClick={route2} className={s.containerRoutes}>
              <div className={s.subcontainer}>
                <IoPersonCircle className={s.icon}/>
                <h3 className={s.link}>Mis pedidos</h3>
              </div>
              <MdOutlineArrowForwardIos className={s.arrow}/>
           </div>
            </div>
              
           <img className={s.image} src={image} alt='campo de futbol' />
            
        </div>
    )
}