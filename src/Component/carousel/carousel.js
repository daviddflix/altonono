import React, { Component } from 'react';
import img from './image/10.jpg'
import img3 from './image/11.jpg'
import img4 from './image/9.jpg'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loading from '../spinner/spinner';

export default class Carouselp extends Component {
    render() {
        return (
           img?  <Carousel  infiniteLoop={true} autoPlay={true} showThumbs={false} showStatus={false}>
           <div style={{height:'500px'}}>
               <img style={{height:'500px'}} src={img} alt=''/>
               <p className="legend" >Cual es tu HIT?</p>
           </div>
           <div style={{height:'500px'}}>
               <img style={{height:'500px'}} src={img3} alt='' />
               <p className="legend">Cual es tu HIT?</p>
           </div>
           <div style={{height:'500px'}}>
               <img style={{height:'500px'}} src={img4} alt=''/>
               <p className="">Cual es tu HIT?</p>
           </div>
       </Carousel> : <Loading/>
        );
    }
};