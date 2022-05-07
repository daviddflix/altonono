import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router-dom"
import { addItem, getDetail } from "../../redux/actions"
import { BoxComentario, BoxTitleAndPhoto, BoxTitleAndPhoto_, ButtonVerCarrito, ContainerOption, ContainerOption_, Form, Input, InputOptions, MainBoxComentario, MainContainer, PhotoProduct } from "./styles"


export default function DetailProduct(){

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
     const detail = useSelector(state => state.detail)
     const history = useHistory()
     

    
      const [options, setOptions] = useState({
        toppings_finals: [],
        salsa: [],
        priceTopping: null,
        id: '',
        product: '',
        price: 0,
        picture: ''
      });

      const backToProducts = () => {
         history.push('/productos')
         dispatch(addItem(options))
      }

      const carrito = () => {
        history.push('/carrito')
        dispatch(addItem(options))
      }
      
      const handleSalsa = (e) => {
      
         const {name, checked} = e.target

         if(checked === true){
        options.salsa.length<=1 && setOptions(prev => ({
                ...prev, salsa: [...prev.salsa, name], picture: detail.image, 
                id: detail.id, price: detail.price, product: detail.description
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
            ...prev, toppings_finals: [...prev.toppings_finals, name]
          }))
        }

        if(checked === false){
          setOptions(prev => ({
            ...prev, toppings_finals: prev.toppings_finals.filter(p => p !== name)
          }))
        }

        

      }

      useEffect(() => {
        

          const numberOfToppings = options.toppings_finals.length 
          const finalPrice = numberOfToppings !== 0? numberOfToppings * 90 : 0
          console.log('number:',numberOfToppings)
          setOptions(prev => ({...prev, priceTopping: finalPrice }))
          
        
      }, [options.toppings_finals])

     

    
    
    return(
        <MainContainer>
            <h1>{detail.description}</h1>
            <PhotoProduct src={`https://hit-pasta.herokuapp.com/${detail.image}`}/>
            <Form>
               <ContainerOption>
              <BoxTitleAndPhoto>
             <BoxTitleAndPhoto_>
             <h3>Salsas</h3>
               <p>selecciona maximo 2</p>
             </BoxTitleAndPhoto_>
              </BoxTitleAndPhoto>
                {
                     detail && detail?.salsas?.map((p, index) => {
                        return(
                            <ContainerOption_ key={p}>
                                 <label>{p}</label>
                                <InputOptions type='checkbox'   checked={options.salsa.index} key={p} name={p}  value={p} onChange={handleSalsa}/>
                            </ContainerOption_>
                        )
                    })
                }
               </ContainerOption>

                <ContainerOption>
                  <BoxTitleAndPhoto>
                 <BoxTitleAndPhoto_>
                 <h3 style={{fontWeight: '900'}}>Toppings</h3>
                <p>Podes seleccionar todas las quieras</p>
                 </BoxTitleAndPhoto_>
                  </BoxTitleAndPhoto>
               
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <ContainerOption_  key={p}>
                                 <label style={{fontWeight: '800'}}>{p}</label>
                                  <label>$ {detail.toppings.price}</label>
                                 <InputOptions type='checkbox' name={p} checked={options.toppings_finals.index} key={p}  value={p} onChange={handleToppings}/>
                            </ContainerOption_>
                        )
                    })
                }
                
                </ContainerOption>
                 
            </Form>

            <MainBoxComentario>
              <h3>Comentarios</h3>
              <BoxComentario type='text' placeholder="Agrega instrucciones o comentarios a tu orden"/>
            </MainBoxComentario>

            <div>
            <ButtonVerCarrito onClick={carrito}>VER CARRITO</ButtonVerCarrito>
            <ButtonVerCarrito onClick={backToProducts}>ARMA OTRO HIT</ButtonVerCarrito>
            </div>


        </MainContainer>
    )
}