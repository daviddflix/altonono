import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, getProduct, getStatus, statusStore, sustractItem } from "../../redux/actions"
import s from './product.module.css'
import CurrencyFormat from 'react-currency-format'
import SearchBar from "../Searchbar/searchBar"
import cartContext from "../context/cartContext"
import Spinner from '../spinner/spinner'
import {TbPlus} from 'react-icons/tb'
import {AiOutlineMinus} from 'react-icons/ai'
import {SocketContext} from '../context/socketContext'

export default function Products(){

    const items = useSelector(state => state.items);
    const status = useSelector(state => state.status);
    const findStatus = status.length > 0 ? status[0].status : 'offline'
    const dispatch = useDispatch();
    const {categories} = useContext(cartContext);
    const itemsFiltered = !categories? items : categories === 'All'? items: items.filter(p => p.category_id === categories)

    
    useEffect(()=> {
      dispatch(getProduct())
    }, [dispatch])

    useEffect(() => {
        dispatch(getStatus())
    }, [])

    return(
        <div className={s.mainBox}>
            <SearchBar/>
         
            {
                itemsFiltered.length? itemsFiltered.map((p,i) => {
                  
                 return(
                   <Card status={findStatus} image={p.img !== null? `https://altonono.herokuapp.com${p.img}` : ''} key={i} available={p.available} title={p.title} id={p.id} description={p.description} unit_price={p.unit_price} />
                 )
                }) : <div className={s.containerSpinner}><Spinner/></div>
            }
        </div>
    )
}


function Card ({ title, unit_price, description, status, id, available, image}) {

    const dispatch = useDispatch();
    const cartItem = useSelector(state => state.cart);
    const findQuantity = cartItem.find(p => p.id === id)

    const [cart, setCart] = useState({
        title: title,
        quantity: 1,
        unit_price: Number(unit_price),
        description: description,
        id: id
    })
 
   
    const ProductNumberIncrement = () => {
        dispatch(addItem({title, quantity: 1, unit_price: Number(unit_price), description, id}))
    }
      const ProductNumberDecrement = () => {
        dispatch(sustractItem({title, quantity: 1, unit_price: Number(unit_price), description, id}))
      }
  
    return(
        <div className={available === false? s.unavailable : s.boxProduct}>
            <div className={s.boxTitle}>
                <h2 className={s.title}>{title}</h2>
                <CurrencyFormat fixedDecimalScale={true}  className={s.price} value={unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <h4 className={s.description}>{description}</h4>
            <div className={s.boxTitle2}>
                {image && <img className={s.img} src={image}  alt={'image'}/>}
                <div className={s.btnBox}>
                    <button disabled={available === false || status === 'offline'} onClick={ProductNumberDecrement} className={s.btn}><AiOutlineMinus/></button>
                    <p className={s.btn}>{findQuantity !== undefined? findQuantity.quantity: 0}</p>
                    <button disabled={available === false || status === 'offline'} onClick={ProductNumberIncrement} className={s.btn}><TbPlus/></button>
                </div>
            </div>
            {available===false && <span className={s.itemUnavailable}>No Disponible</span>}
        </div>
    )
}
