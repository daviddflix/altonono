import { Anchor, IconMap, HeaderPi, MainContainer, Text, IconPayment, IconGeo, Container, MoneyIcon, MercadoPagoIcon } from "./styles";
import img from './image/google-maps-color-codes.svg'
import { useEffect } from "react";
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import mp from './image/icons8-mercado-pago-96.png'
mapboxgl.accessToken = 'pk.eyJ1IjoiZGF2aWRkZmxpeCIsImEiOiJjbDJyOXFnMHEwbXVvM2NxcmtpNmJmanZkIn0.UCpw9jgs42SyipHfaGRQQQ';



export default function Info (){



    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'mapContainer', // container ID
            style: 'mapbox://styles/mapbox/streets-v11', // style URL
            center: [ -58.43780477381665,  -34.565258520784894], // starting position [lng, lat]
            zoom: 9 // starting zoom
            });

            map.addControl(new mapboxgl.NavigationControl(), 'top-right')

            map.on('load', () => {
                // Add a GeoJSON source with 3 points.
                map.addSource('points', {
                'type': 'geojson',
                'data': {
                'type': 'FeatureCollection',
                'features': [
                {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'Point',
                'coordinates': [-58.43780477381665,  -34.565258520784894]
                }
                },
                {
                'type': 'Feature',
                'properties': {},
                'geometry': {
                'type': 'Point',
                'coordinates': [ -58.499649202655384, -34.489699219637046]
                }
                },
                ]
                }
                });
                // Add a circle layer
                map.addLayer({
                'id': 'circle',
                'type': 'circle',
                'source': 'points',
                'paint': {
                'circle-color': '#4264fb',
                'circle-radius': 8,
                'circle-stroke-width': 2,
                'circle-stroke-color': '#ffffff'
                }
                });
                 
                // Center the map on the coordinates of any clicked circle from the 'circle' layer.
                map.on('click', 'circle', (e) => {
                map.flyTo({
                center: e.features[0].geometry.coordinates
                });
                });
                 
                // Change the cursor to a pointer when the it enters a feature in the 'circle' layer.
                map.on('mouseenter', 'circle', () => {
                map.getCanvas().style.cursor = 'pointer';
                });
                 
                // Change it back to a pointer when it leaves.
                map.on('mouseleave', 'circle', () => {
                map.getCanvas().style.cursor = '';
                });
                });
    }, [])

    return(
      
           <MainContainer id="envio">
               <Container>
                   <IconGeo/>
                   <h2>Puntos de Pick Up</h2>
                   <HeaderPi>Podes hacer tu pedido por Whatsapp y pasar a buscarlo</HeaderPi>
                  <Anchor href="https://goo.gl/maps/FH46g2sfJuPotPnY8" > <IconMap src={img} /><Text>Ladislao Martínez 40, Martínez, Provincia de Buenos Aires</Text></Anchor>
                  <Anchor href="https://goo.gl/maps/NNLvnZSWAMTC5Z2d9"> <IconMap src={img}/><Text>Soldado de la Independencia 1073, CABA</Text></Anchor>
                  <div id='mapContainer' 
                  style={{width:'300px', height:'300px'}}
                ></div>
               </Container>
               <Container>
                   <IconPayment/>
                   <h2>Metodos de pago</h2>
                   <Text>Podes pagar con mercado pago o en efectivo en cualquiera de nuestras sucursales</Text>
                   <MercadoPagoIcon src={mp}/>
                   <MoneyIcon/>
               </Container>

           </MainContainer>
       
    )
}