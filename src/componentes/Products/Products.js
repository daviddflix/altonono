import { useContext, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addItem, getProduct } from "../../redux/actions"
import s from './product.module.css'
import CurrencyFormat from 'react-currency-format'
import SearchBar from "../Searchbar/searchBar"
import cartContext from "../context/cartContext"
import Spinner from '../spinner/spinner'
import {TbPlus} from 'react-icons/tb'
import {AiOutlineMinus} from 'react-icons/ai'
import {v4 as uuidv4} from 'uuid'

export default function Products(){

    const items = useSelector(state => state.items)
    const itemsInCart = useSelector(state => state.cart)
    const dispatch = useDispatch()

   console.log('itemsInCart', itemsInCart)
    
    const {categories} = useContext(cartContext)
    
    const itemsFiltered = !categories? items : categories === 'All'? items: items.filter(p => p.category_id === categories)
    

    useEffect(()=> {
      dispatch(getProduct())
    }, [dispatch])

    return(
        <div className={s.mainBox}>
            <SearchBar/>
         
            {
                itemsFiltered.length? itemsFiltered.map((p,i) => {
                 return(
                   <Card key={i} title={p.title} quantity={0} id={p.id} description={p.description} unit_price={p.unit_price} />
                 )
                }) : <Spinner/>
            }
        </div>
    )
}


function Card ({ title, unit_price, quantity, description, id}) {

    const dispatch = useDispatch()

   

   

    const [cart, setCart] = useState({
        title: title,
        quantity: quantity,
        unit_price: Number(unit_price),
        description: description,
        id: id
    })

   
    const ProductNumberIncrement = () => {
        setCart(prev => ({...prev, quantity: cart.quantity + 1 }))
       
    }
      const ProductNumberDecrement = () => {
        if(cart.quantity === 0){
            setCart(prev => ({...prev, quantity: 0 }))
            
        } else{
            setCart(prev => ({...prev, quantity: cart.quantity - 1 }))
           
        }
      }
      const [text, setText] = useState('Agregar')
  
      const AddItemsToCart = (e) => {
        if(cart.quantity){
         dispatch(addItem(cart))
         setText('AGREGADO')
        }
       
     }

     useEffect(() => {
        if(text === 'AGREGADO'){
           setTimeout(() => {
            setText('Agregar')
           }, 2000);
        }
     }, [text])

     const changeText = () => {
        setText('Agregado')
      return  setText('Agregar')
     }

  

    return(
        <div className={s.boxProduct}>
            <div className={s.boxTitle}>
                <h2 className={s.title}>{title}</h2>
                <CurrencyFormat fixedDecimalScale={true}  className={s.price} value={unit_price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
            </div>
            <h4 className={s.description}>{description}</h4>
            <div className={s.boxTitle2}>
                
                <div className={s.btnBox}>
                    <button onClick={ProductNumberDecrement} className={s.btn}><AiOutlineMinus/></button>
                    <p className={s.btn}>{cart.quantity}</p>
                    <button onClick={ProductNumberIncrement} className={s.btn}><TbPlus/></button>
                </div>
                    <button  onClick={AddItemsToCart} className={s.btnAdd}>{text}</button>
            </div>
        </div>
    )
}
