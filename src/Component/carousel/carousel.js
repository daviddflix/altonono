import React, { Component } from 'react';
import img from './image/spaguetti 1500x.jpg'
import img2 from './image/noquis 442.jpg'
import img3 from './image/portada-pastas-604x270.jpg'


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../spinner/spinner';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';
import { ArrowLeft, ArrowRight } from './styles';

export default class Carouselp extends Component {
    render() {
        return (
           img?  <Carousel   infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
           <div >
               <img style={{height:'200px', width: 'center'}} src={img} alt=''/>
               {/* <p className="legend" >Cual es tu HIT?</p> */}
           </div>
           <div style={{height:'200px'}}>
               <img style={{height:'200px', width: 'center'}} src={img2} alt='' />
               {/* <p className="legend">Cual es tu HIT?</p> */}
           </div>
           <div style={{height:'200px'}}>
               <img style={{height:'200px'}} src={img3} alt=''/>
               {/* <p className="">Cual es tu HIT?</p> */}
           </div>
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