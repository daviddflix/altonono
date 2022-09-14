import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, filterProducts, getStatus, sustractItem } from "../../redux/actions"
import s from './product.module.css'
import CurrencyFormat from 'react-currency-format'
import SearchBar from "../Searchbar/searchBar"
import Spinner from '../spinner/spinner'
import {TbPlus} from 'react-icons/tb'
import {AiOutlineMinus} from 'react-icons/ai'
import {FcSearch} from 'react-icons/fc'


export default function Products(){

    const items = useSelector(state => state.items);
    const status = useSelector(state => state.status);
    const findStatus = status.length > 0 && status[0].status;
    const dispatch = useDispatch();
    const [finder,setFinder] = useState('');

    useEffect(() => {
        dispatch(filterProducts({product: finder}))
    }, [dispatch, finder])
    
    useEffect(()=> {
      dispatch(filterProducts())
    }, [dispatch])

    useEffect(() => {
        dispatch(getStatus())
    }, [dispatch])

    return(
        <div className={s.mainBox}>
            <div className={s.containerInput}>
                <FcSearch className={s.searchIcon}/>
            <input type='text' value={finder} className={s.input} placeholder='Encuentra productos por su nombre' onChange={(e) => setFinder(e.target.value)}/>
            </div>
            <SearchBar />
            {
                items.length? items.map((p,i) => {
                  
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
                {image && <img className={s.img} src={image}  alt={'producto'}/>}
                <div className={s.btnBox}>
                    <button disabled={available === false || status === "Cerrado"} onClick={ProductNumberDecrement} className={s.btn}><AiOutlineMinus/></button>
                    <p className={s.btn}>{findQuantity !== undefined? findQuantity.quantity: 0}</p>
                    <button disabled={available === false || status === "Cerrado"} onClick={ProductNumberIncrement} className={s.btn}><TbPlus/></button>
                </div>
            </div>
            {available===false && <span className={s.itemUnavailable}>No Disponible</span>}
        </div>
    )
}
