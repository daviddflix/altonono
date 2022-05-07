import React, { Component } from 'react';
import img from './image/penne 1500x1120.jpg'
import img3 from './image/tagliatellie 1000x1000.jpg'
import img4 from './image/noquis 1900x1200.webp'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../spinner/spinner';

export default class Carouselp extends Component {
    render() {
        return (
           img?  <Carousel  infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
           <div style={{height:'700px'}}>
               <img style={{height:'700px', width: '1000px'}} src={img} alt=''/>
               <p className="legend" >Cual es tu HIT?</p>
           </div>
           <div style={{height:'700px'}}>
               <img style={{height:'700px', width: '700px'}} src={img3} alt='' />
               <p className="legend">Cual es tu HIT?</p>
           </div>
           <div style={{height:'700px'}}>
               <img style={{height:'700px'}} src={img4} alt=''/>
               <p className="">Cual es tu HIT?</p>
           </div>
       </Carousel> : <Loading/>
        );
    }
};