import {  useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getDetail } from "../../redux/actions"
import { Form, Input, MainContainer } from "./styles"


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
               <div>
               <label>Salsas</label>
               <p>selecciona maximo 2</p>
                {
                     detail && detail?.salsas?.map(p => {
                        return(
                            <div key={p}>
                                 <input type='checkbox' checked={checked} name={p} value={p} onChange={() => handleSalsa()}/>
                                 <label>{p}</label>
                            </div>
                        )
                    })
                }
               </div>
                <div>
                <label>Toppings</label>
                <p>Podes seleccionar todas las quieras</p>
                {
                     detail && detail?.toppings?.option?.map(p => {
                        return(
                            <div key={p}>
                                 <input type='checkbox' value={p} onChange={handleToppings}/>
                                 <label>{p}</label>
                                  <label>{detail.toppings.price}</label>
                            </div>
                        )
                    })
                }
                
                </div>
                 
            </Form>

        </MainContainer>
    )
}