import { MainContainer, TextoSlide,  ContainerButton, Arrow, Buttons, Text, ButtonAddToCart, ProductNumber, ArrowLeft, ArrowRight } from "./styles";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import React, {  useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import {getProduct} from '../../redux/actions'
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import Rating from '@mui/material/Rating';
import Loading from '../spinner/spinner'
import { useAuth0 } from "@auth0/auth0-react";


 const CarouselProduct = () =>{
    
    const [Number, setNumber] = useState(1)
    const [value, setValue] = React.useState(5);
    const {isAuthenticated , loginWithRedirect } = useAuth0();

    const ProductNumberIncrement = () => {
        setNumber(Number + 1)
    }

    const ProductNumberDecrement = () => {
        if(Number === 1 ){
           return setNumber(1)
        }
        setNumber(Number - 1)
    }

    
    const dispatch = useDispatch()
    const product = useSelector(state => state.food)

   

    const handleClick = async() => {
        window.scroll(0,0)
      }
     


    useEffect(() => {
        let cancel = false
        const data = async () => {
            dispatch(getProduct())
        }
        
        data()
        return () => {
            cancel = true
        }
      
    }, [dispatch])

    return( 
         <MainContainer >
             <div >
             <h3>Nuestros productos</h3>
            <h4>Podes elegir una pasta y dos salsas a eleccion</h4>
             </div>
         
             <CarouselProvider
                    naturalSlideWidth={100}
                    naturalSlideHeight={153}
                    totalSlides={6}
                    isPlaying={false}
                    
                >
                    <Slider>
                          {
                            product? product?.map(p => {
                                 return(
                                   
                                  <Slide  index={p.id} key={p.id}>
                            {product.length?  <a href="https://www.instagram.com/hitpasta/">
                                   <img style={{borderRadius: '10px'}}  src={`https://hit-pasta.herokuapp.com${p.picture_url}`} alt="Img"/>
                                </a>: <Loading/>}
                               
                                <TextoSlide >
                                <Text>{p.title}</Text>
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
                                    <ButtonAddToCart to={`detail/${p.id}`}>ARMA TU HIT</ButtonAddToCart>
                                </ContainerButton>
                            </TextoSlide>
                            </Slide>
                           
                                 )
                              }): <Loading/>
                            }
                    </Slider>
                   <ArrowLeft><IoIosArrowBack/></ArrowLeft>
                   <ArrowRight><IoIosArrowForward/></ArrowRight>
                </CarouselProvider>
                </MainContainer>

)
}

export default CarouselProduct






 