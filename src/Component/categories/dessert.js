
import { useState } from "react";
import { useSelector } from "react-redux";
import { ContainerOptionChild, InputOptions, LabelProductName } from "../detailProduct/styles";
import Loading from "../spinner/spinner";
import { MainContainer } from "./styles";

export default function Dessert () {

  const products = useSelector(state => state.food)
  console.log('0', products[0])
  const [options, setOptions] = useState()

  const handlePostre = (e) => {
     setOptions(e.target.value)
  }
    return(
        <MainContainer>
       
         <h3>ELIGE TUS POSTRES</h3>
         <div style={{position: 'relative', right: '3rem'}}>
         {
            products? products[0].dessert.dessert.map((p, i) => {
              console.log(p)
               return(
                <ContainerOptionChild key={i}>
              
                    <LabelProductName>{p}</LabelProductName>
                    <InputOptions type='checkbox'  key={p} name={p}  value={p} onChange={handlePostre}/> 
                  
                 
               </ContainerOptionChild>
             )
         }): <Loading/>
        }
         </div>

      </MainContainer>

    )
}