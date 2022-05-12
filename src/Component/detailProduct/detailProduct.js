import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addItem, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, ButtonVerCarrito, ContainerOption, ContainerOptionChild, Form, InputOptions, MainBoxComentario, MainContainer, PhotoProduct } from "./styles"
import { useAuth0 } from "@auth0/auth0-react";

export default function DetailProduct(){
  const {isAuthenticated, user , loginWithRedirect } = useAuth0();
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
     const detail = useSelector(state => state.detail)
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
                ...prev, salsa: [...prev.salsa, name], picture_url: detail.image, 
                id: detail.id, price: detail.price, title: detail.description
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
            <h1>{detail.description}</h1>
            <PhotoProduct src={`https://hit-pasta.herokuapp.com/${detail.image}`}/>
            <Form>
               <ContainerOption>
              {/* <BoxTitleAndPhoto> */}
             <BoxTitleAndPhoto>
             <h3>Salsas</h3>
               <p>selecciona maximo 2</p>
             </BoxTitleAndPhoto>
              {/* </BoxTitleAndPhoto> */}
                {
                     detail && detail?.salsas?.map((p, index) => {
                        return(
                            <ContainerOptionChild key={p}>
                                 <label>{p}</label>
                                <InputOptions type='checkbox'   checked={options.salsa.index} key={p} name={p}  value={p} onChange={handleSalsa}/>
                            </ContainerOptionChild>
                        )
                    })
                }
               </ContainerOption>

                <ContainerOption>
               
                 <BoxTitleAndPhoto>
                 <h3 style={{fontWeight: '900'}}>Toppings</h3>
                <p>Podes seleccionar todas las quieras</p>
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