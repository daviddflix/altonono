import { useCallback, useContext, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import navContext from '../context/navContext'
import s from './vertical.module.css'
import {MdRestaurantMenu} from 'react-icons/md'
import {IoPersonCircle} from 'react-icons/io5'
import {MdOutlineArrowForwardIos} from 'react-icons/md'

export default function VerticalNav(){

    const {nav, setNav} = useContext(navContext);
    const wrapperRef = useRef(null);


    const handleClickOutside = useCallback((event) => {
        if(nav === true && wrapperRef.current && !wrapperRef.current.contains(event.target)){
            setNav(!nav)
            const body = document.body.style
            body.overflow='visible'
            body.pointerEvents='auto'
         }
  
        if (nav === true && wrapperRef.current && wrapperRef.current.contains(event.target)) {
            setNav(!nav)
            const body = document.body.style
            body.overflow='visible'
            body.pointerEvents='auto'
            }
   }, [nav]) 

   useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside, true);
   
}, [nav, handleClickOutside]);

useEffect(() => {
        
    if(nav){   
       
        const body = document.body.style
        body.overflow='hidden'
        body.zIndex=10
        body.pointerEvents='none'  
        document.getElementById('nav').style.pointerEvents='auto'  
        document.getElementById('nav').style.overflow='visible'
    }
  
   
}, [nav])

    return(
        <div id='nav' ref={wrapperRef} style={nav === true? {left: 0}: {left: '-100%'}} className={s.main}>
            <div className={s.containerRoutes}>
               <div className={s.subcontainer}>
                    <MdRestaurantMenu className={s.icon}/>
                    <NavLink className={s.link} to='/'>Productos</NavLink>
              </div>
              <MdOutlineArrowForwardIos className={s.arrow}/>
           </div>
           <div className={s.containerRoutes}>
              <div className={s.subcontainer}>
                <IoPersonCircle className={s.icon}/>
                <NavLink className={s.link} to='/history'>Pedidos</NavLink>
              </div>
              <MdOutlineArrowForwardIos className={s.arrow}/>
           </div>
              
           
            
        </div>
    )
}