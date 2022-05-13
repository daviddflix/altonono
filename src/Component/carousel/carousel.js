import React, { Component } from 'react';
import img from './image/tiposDePasta.jpg'
import img3 from './image/tagliatellie 1000x1000.jpg'
import img4 from './image/noquis 1900x1200.webp'

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
    //        img?  <Carousel   infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
    //        <div style={{height:'600px'}}>
    //            <img style={{height:'600px', width: 'center'}} src={img} alt=''/>
    //            <p className="legend" >Cual es tu HIT?</p>
    //        </div>
    //        <div style={{height:'600px'}}>
    //            <img style={{height:'600px', width: 'center'}} src={img3} alt='' />
    //            <p className="legend">Cual es tu HIT?</p>
    //        </div>
    //        <div style={{height:'600px'}}>
    //            <img style={{height:'600px'}} src={img4} alt=''/>
    //            <p className="">Cual es tu HIT?</p>
    //        </div>
    //    </Carousel> : <Loading/>

    <CarouselProvider
    naturalSlideWidth={100}
    naturalSlideHeight={150}
    totalSlides={1}
    
  >
    <Slider>
      <Slide index={0}> <img src={img}/> </Slide>
    </Slider>
    <ArrowLeft><IoIosArrowBack/></ArrowLeft>
    <ArrowRight><IoIosArrowForward/></ArrowRight>
  </CarouselProvider>
        );
    }
};