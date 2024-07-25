import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Card from "./Cards";
import funilaria from './../assets/funilaria.jpg'
import pintura from './../assets/pintura.jpg'
import polir from './../assets/polir.jpg'
export default function Services() {
    const [ref, inView] = useInView({
        threshold: [0.3],
        triggerOnce: false,
      });
    
      const variants = {
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.65 },
      };
    return(
        <div id="services" className="mx-auto my-5">

            <motion.div animate={inView ? "visible" : "hidden"} variants={variants} exit="hidden" transition={{ duration:0.25,bounce:0.25, ease: "easeOut" }} className="mx-5" ref={ref}>

                <h1 className="font-bold font-Oswald text-4xl lg:text-6xl text-center">Nossos Serviços</h1>
 
                <Card title="Funilaria" text="Com nosso serviço de funilaria conseguimos recuperar totalmente o seu caminhão com profissionais altamente qualificados e equipamentos modernos,nos garantimos com a restauração de qualquer caminhão" image={funilaria}/>
                <Card title="Pintura" text="Utilizamos tintas de qualidade premium para garantir que seu caminhão não apenas recupere a aparência de fábrica, mas também mantenha sua durabilidade e resistência ao longo do tempo." image={pintura}/>
        
                <Card title="Polimento" text="Especializamos tambem com o polimento, isso garante que cada veiculo não apenas brilhe, mas também esteja protegido contra os elementos, utilizando produtos de alta qualidade para o melhor acabamento possivel" image={polir}/>
            </motion.div>
        </div>
    )
}