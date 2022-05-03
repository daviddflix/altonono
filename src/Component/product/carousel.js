import img3 from './image/8.jpg'
import img4 from './image/11.jpg'
import img5 from './image/10.jpg'
import {Slideshow, Slide, TextoSlide} from './slider'
import { Titulo } from './styles';

const Carousel = () => {
	return (
		<main>	
			{/* <Titulo>Productos Destacados</Titulo> */}
			<Slideshow controles={true} autoplay={true} velocidad="2000" intervalo="6000">
				<Slide>
					<a href="https://www.instagram.com/hitpasta/">
						<img src={img3} alt="Img"/>
					</a>
					<TextoSlide >
						<p>10% descuento comprando en Efectivo</p>
					</TextoSlide>
				</Slide>
				<Slide>
					<a href="https://www.instagram.com/hitpasta/">
						<img src={img4} alt="Img"/>
					</a>
					<TextoSlide>
						<p>10% descuento comprando en Efectivo</p>
					</TextoSlide>
				</Slide>
                <Slide>
					<a href="https://www.instagram.com/hitpasta/">
						<img src={img5} alt="Img"/>
					</a>
					<TextoSlide>
						<p>10% descuento comprando en Efectivo</p>
					</TextoSlide>
				</Slide>
			</Slideshow>
		</main>
	);
}


 
export default Carousel;