import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addItem, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, ButtonVerCarrito, ContainerOption, LabelProductName, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct } from "./styles"
import { useAuth0 } from "@auth0/auth0-react";
import {v4 as uuidv4} from 'uuid'
import Loading from "../spinner/spinner"
import { motion } from "framer-motion/dist/framer-motion"

export default function DetailProduct(){
  const {isAuthenticated, user , loginWithRedirect } = useAuth0();
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
     const detail = useSelector(state => state.detail)
     console.log('detail:', detail)
     const history = useHistory()
     

    
      const [options, setOptions] = useState({
        toppings: [],
        salsa: [],
        priceTopping: null,
        id: '',
        title: '',
        price: 0,
        picture_url: '',
        Comments: '',
        unit_price: 0,
        quantity: 1
      });

      const backToProducts = () => {
         if(options.salsa.length){
          dispatch(addItem(options))
         }
         window.scroll(0,0)
         history.push('/productos')
      }

      const carrito = () => {
      
        if(isAuthenticated){
          if(options.salsa.length){
            dispatch(addItem(options))
           }
            window.scroll(0,0)
            history.push('/carrito')
        } else{
          loginWithRedirect()
        }
       
      }
     

      const handleComments = (e) => {
        setOptions(prev => ({
          ...prev, Comments:  e.target.value}))
      }
      
      const handleSalsa = (e) => {
      
        //  const {name, checked, disabled} = e.target
           
               
         if(e.target.checked === true){
        options.salsa.length <=1 && setOptions(prev => ({
                ...prev, salsa: [...prev.salsa, e.target.name], picture_url: detail.picture_url, 
                id: uuidv4(), price: detail.price, title: detail.title
              }))
              
             
      }

      if(options.salsa.length <=2){
        e.target.checked = false
      }

         if(e.target.checked === false){
           setOptions(prev => ({
             ...prev, salsa: prev.salsa.filter(p => p !== e.target.name)
           }))
         }

 
      }    

      const handleToppings = async (e) => {

        const{name, checked} = e.target

        if(checked === true){
          setOptions(prev => ({
            ...prev, toppings: [...prev.toppings, name]
          }))
        }

        if(checked === false){
          setOptions(prev => ({
            ...prev, toppings: prev.toppings.filter(p => p !== name)
          }))
        }

        

      }

      useEffect(() => {

      const producprice = options.price
      const topprice = options.priceTopping 
     
          const total = topprice? producprice + topprice : producprice

          setOptions(prev => ({...prev, unit_price: total}))
         
      }, [options.price, options.priceTopping])
     

      useEffect(() => {
          const numberOfToppings = options.toppings.length 
          const finalPrice = numberOfToppings !== 0? numberOfToppings * 90 : 0
         
          setOptions(prev => ({...prev, priceTopping: finalPrice }))
          
        
      }, [options.toppings])

     const limit = (n = 2) => {
       if(options.salsa.length === n){
         return false
       }
       return options.salsa.index
     }

    
    
    return(
        <MainContainer as={motion.div}  initial={{width: 0, opacity: 0, transition: {duration: '0.1'}}}  animate={{width: '100%', opacity: 1}} exit={{x: window.innerWidth, opacity: 0}}>
            {/* <h1>{detail.title}</h1> */}

           <div style={{width: '100%', height: '300px'}}>
           {
            detail.picture_url?  <PhotoProduct as={motion.img}  initial={{width: 0, transition: {duration: '0.5'}}}  animate={{width: '100%'}} exit={{x: window.innerWidth}} src={`https://hit-pasta.herokuapp.com/${detail.picture_url}`}/> : <Loading/>
           }
           </div>
           
            <Form>
               <ContainerOption>
             <BoxTitleAndPhoto>
               <h3>Salsas</h3>
               <h4 style={{margin: '7px'}}>selecciona maximo 2</h4>
             </BoxTitleAndPhoto>
              {/* </BoxTitleAndPhoto> */}
                {
                     detail && detail?.salsas?.map((p, index) => {
                        return(
                            <ContainerOptionChild key={p}>
                                 <LabelProductName>{p}</LabelProductName>
                                <InputOptions type='checkbox' disabled=''   checked={options.salsa.index} key={p} name={p}  value={p} onChange={handleSalsa}/>
                            </ContainerOptionChild>
                        )
                    })
                }
               </ContainerOption>

                <ContainerOption>
               
                 <BoxTitleAndPhoto>
                 <h3 style={{fontWeight: '900'}}>Toppings</h3>
                <h4 style={{margin: '7px'}}>Podes seleccionar todos las quieras</h4>
                 </BoxTitleAndPhoto>
                
               
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <ContainerOptionChild  key={p}>
                                 <LabelProductName>{p}</LabelProductName>
                                  <label>$ {detail.toppings.price}</label>
                                 <InputOptions type='checkbox' name={p} checked={options.toppings.index} key={p}  value={p} onChange={handleToppings}/>
                            </ContainerOptionChild>
                        )
                    })
                }
                
                </ContainerOption>
                 
            </Form>

            <MainBoxComentario>
              <h3>Comentarios</h3>
              <BoxComentario type='text' value={options.Comments} onChange={handleComments} placeholder="Agrega instrucciones o comentarios a tu orden"/>
            </MainBoxComentario>

            <div>
            <ButtonVerCarrito onClick={carrito}>OKAY</ButtonVerCarrito>
            <ButtonVerCarrito onClick={backToProducts}>ARMA OTRO HIT</ButtonVerCarrito>
            </div>


        </MainContainer>
    )
}