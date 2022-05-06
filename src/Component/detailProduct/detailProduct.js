import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../../redux/actions"
import { BoxComentario, ContainerOption, ContainerOption_, Form, Input, InputOptions, MainBoxComentario, MainContainer } from "./styles"


export default function DetailProduct(){

    const dispatch = useDispatch()
    const {id} = useParams()
    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    
     const detail = useSelector(state => state.detail)
      console.log(detail)

    
      const [options, setOptions] = useState({
        toppings: [],
        salsa: []
      });

      const [checked, setChecked] = useState(new Array(options.toppings.length).fill(false));

    //   setOptions({...options, salsa: [...options.salsa, e.target.value]})
    //   setChecked(!checked)
    const [total, setTotal] = useState(0);
      
      const handleSalsa = (position) => {
      
          const updatedCheckedState = checked.map((item, index) =>
            index === position ? !item : item
          );
      
          setChecked(updatedCheckedState);
      
          const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
              if (currentState === true) {
                return sum + detail[index].price;
              }
              return sum;
            },
            0
          );
      
          setTotal(totalPrice);
      }

      const handleToppings = (e) => {
        setOptions({...options, toppings: [...options.toppings, e.target.value]})
      }

    
    
    return(
        <MainContainer>
            <h1>{detail.description}</h1>
            <Form>
               <ContainerOption>
              <div  style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <h3>Salsas</h3>
               <p>selecciona maximo 2</p>
              </div>
                {
                     detail && detail?.salsas?.map(p => {
                        return(
                            <ContainerOption_ key={p}>
                                 <label>{p}</label>
                                 <InputOptions type='checkbox' checked={checked} name={p} value={p} onChange={() => handleSalsa()}/>
                            </ContainerOption_>
                        )
                    })
                }
               </ContainerOption>

                <ContainerOption>
                <h3>Toppings</h3>
                <p>Podes seleccionar todas las quieras</p>
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <ContainerOption_  key={p}>
                                 <label style={{fontWeight: '800'}}>{p}</label>
                                  <label>$ {detail.toppings.price}</label>
                                 <InputOptions type='checkbox' value={p} onChange={handleToppings}/>
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

        </MainContainer>
    )
}