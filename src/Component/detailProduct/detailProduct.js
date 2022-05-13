import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addItem, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, ButtonVerCarrito, ContainerOption, LabelProductName, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct } from "./styles"
import { useAuth0 } from "@auth0/auth0-react";
import {v4 as uuidv4} from 'uuid'

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
      
         const {name, checked} = e.target

         if(checked === true){
        options.salsa.length<=1 && setOptions(prev => ({
                ...prev, salsa: [...prev.salsa, name], picture_url: detail.picture_url, 
                id: uuidv4(), price: detail.price, title: detail.title
              }))
        
      }

         if(checked === false){
           setOptions(prev => ({
             ...prev, salsa: prev.salsa.filter(p => p !== name)
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

     

    
    
    return(
        <MainContainer>
            {/* <h1>{detail.title}</h1> */}
            <PhotoProduct src={`https://hit-pasta.herokuapp.com/${detail.picture_url}`}/>
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
                                <InputOptions type='checkbox'   checked={options.salsa.index} key={p} name={p}  value={p} onChange={handleSalsa}/>
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
                                 <label style={{fontWeight: '800'}}>{p}</label>
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
            <ButtonVerCarrito onClick={carrito}>VER CARRITO</ButtonVerCarrito>
            <ButtonVerCarrito onClick={backToProducts}>ARMA OTRO HIT</ButtonVerCarrito>
            </div>


        </MainContainer>
    )
}