import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
  } from 'react-leaflet'
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
  
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import defaultIconPng from "leaflet/dist/images/marker-icon.png";
export default function Localizacao() {
    const position = [-25.575083, -48.57175]


const defaultIcon = new Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false
  });

  const variants = {
    visible: { opacity: 1, scale: 1},
    hidden: {opacity: 0,scale: 0.65}
  };
    return(
        <div id="localizacao">
           <motion.div animate={inView ? "visible" : "hidden"} variants={variants} exit="hidden" transition={{ duration: 2, ease: "easeOut" }} className="w-auto my-auto mx-auto" ref={ref}>
           
            <h1 className='text-center font-Oswald font-semibold text-3xl lg:text-4xl p-10'>Nossa localização</h1>
            <h3 className='text-center font-Oswald font-thin text-3xl lg:text-4xl mb-6'>Rua das ametista n•378 Jardim Ouro fino</h3>
            <div className="mx-auto" style={{height:300,width:300}}>
                <MapContainer className="h-full w-full mx-auto" center={position} zoom={14} scrollWheelZoom={true}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker icon={defaultIcon} position={position}>
                <Popup>
                    {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                </Popup>
                </Marker>
                </MapContainer>
            </div>
            </motion.div>
        </div>
    )

}