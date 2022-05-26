import React, { Component } from 'react';
import img from './image/spaguetti 1600x1000.jpg'
import img2 from './image/noquis 442.jpg'
import img3 from './image/portada-pastas-604x270.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../spinner/spinner';


import { Div, Img } from './styles';

export default class Carouselp extends Component {
    render() {
        return (
           img?  <Carousel   infiniteLoop={true} autoPlay={false} showThumbs={false} showStatus={false}>
           <Div>
               <Img src={img} alt='picture'/>
           </Div>
           <Div>
               <Img src={img2} alt='picture' />
               
           </Div>
           <Div>
           <Img  src={img3} alt='picture'/>      
           </Div>
       </Carousel> : <Loading/>

  //   <CarouselProvider
  //   naturalSlideWidth={100}
  //   naturalSlideHeight={100}
  //   totalSlides={2}
  //   hasMasterSpinner={img? false : true}
  //   infinite={true}
  //   isPlaying={true}
  // >
  //   <Slider >
  //     <Slide index={0}> <img  src={img}/> </Slide>
  //     <Slide index={1}> <img  src={img2}/> </Slide>
  //   </Slider>
  //   <ArrowLeft><IoIosArrowBack/></ArrowLeft>
  //   <ArrowRight><IoIosArrowForward/></ArrowRight>
  // </CarouselProvider>
  // <img src={img} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', width: '100%'}} alt=''/>
 
        );
    }
};