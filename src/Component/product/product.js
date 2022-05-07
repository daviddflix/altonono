import { MainContainer, TextoSlide, Menu, NavLink, ContainerButton, Arrow, Buttons, Text, ButtonAddToCart, ProductNumber, ArrowLeft, ArrowRight } from "./styles";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { useParams } from "react-router-dom";
import React, {  useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getProduct} from '../../redux/actions'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import Rating from '@mui/material/Rating';


 const CarouselProduct = () =>{
    
    const [Number, setNumber] = useState(0)
    const [value, setValue] = React.useState(5);
    

    const ProductNumberIncrement = () => {
        setNumber(Number + 1)
    }

    const ProductNumberDecrement = () => {
        if(Number === 0 ){
           return setNumber(0)
        }
        setNumber(Number - 1)
    }

    const {id} = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.food)

    console.log('info', product)

    const handleClick = () => {
        window.scroll(0,0)
      }
     


    useEffect(() => {
        let cancel = false
        const data = async () => {
            dispatch(getProduct())
        }
        console.log(data)
        data()
        return () => {
            cancel = true
        }
      
    }, [dispatch])

    return( 
         <MainContainer>
             <h3>Nuestros productos</h3>
            <h4>Podes elegir una pasta y dos salsas a eleccion</h4>
         
             <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={150}
                    totalSlides={6}
                    isPlaying={false}
                    
                >
                    <Slider>
                          {
                              product?.map(p => {
                                 return(
                                   
                                    <Slide  index={p.id} key={p.id}><a href="https://www.instagram.com/hitpasta/">
                                    <img style={{borderRadius: '10px'}}  src={`https://hit-pasta.herokuapp.com/${p.image}`} alt="Img"/>
                                </a>
                               
                                <TextoSlide >
                                <Text>{p.description}</Text>
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                    setValue(newValue);
                                    }}
                                />
                                 <Text>$ {p.price}</Text>
                                <ContainerButton>
                                    <Buttons>
                                        <Arrow onClick={ProductNumberDecrement}>-</Arrow>
                                         <ProductNumber>{Number}</ProductNumber>
                                        <Arrow onClick={ProductNumberIncrement}>+</Arrow>
                                    </Buttons>
                                    <ButtonAddToCart onClick={handleClick} to={`detail/${p.id}`}>ARMA TU HIT</ButtonAddToCart>
                                </ContainerButton>
                            </TextoSlide>
                            </Slide>
                           
                                 )
                              })
                            }
                    </Slider>
                   <ArrowLeft><IoIosArrowBack/></ArrowLeft>
                   <ArrowRight><IoIosArrowForward/></ArrowRight>
                </CarouselProvider>
                </MainContainer>

)
}

export default CarouselProduct






 