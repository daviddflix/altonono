import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../redux/actions";


 export const CartContext = createContext()
  
 export const CartProvider = ({children}) => {

     const [cart, setCart] = useState()
     const dispatch = useDispatch()

     useEffect(() => {
        let cancel = false
        const data = async () => {
            dispatch(getProduct())
        }
       
        data()
        setCart(data)
        return () => {
            cancel = true
        }
      
    }, [dispatch])

    const addItemToCart = (product) => {
        const inCart = cart.find(p => p.id === product.id)

        if (inCart){
            setCart(cart.map(p => {
                if(p.id === product.id){
                    return{...inCart}
                } else{
                    return p
                }
            } ))
        } else{
        setCart([...cart])
        }
    };

    

    return(
        <CartContext.Provider value={{cart, addItemToCart}}>
            {children}
        </CartContext.Provider>
    )
 }