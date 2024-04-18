
"use client";
import React from "react";
import { motion } from "framer-motion"
import CustomImage from "./CustomImage";
import "./Sobre.css";
import { ParallaxScroll } from "./ui/parallax-scroll";
 
import Arrow from "./arrow.svg";
function Sobre() {
  return(
    <>
    
      <main className={"main"}>
        <img src="Pessoa.png" className="figure" alt="Pessoa" />
        <h1 className="header">Seja bem vindo ao meu portfolio de caminhões!</h1>
        
        <div className={"tag"}>
            <p style={{color:"white",fontFamily:"Josefin Sans"}}>Rode pra baixo para ver mais!</p>
            <img className={"img"} src={Arrow} alt="arrow"/>
            
        </div>        
      </main>
      <section className={"section"}>
      <div className="sectionDiv">
        <h1 style={{color:"white"}} className="header-content">Ola seja bem vindo ao meu portfolio de caminhões</h1>
        <p className="content" style={{color:"white"}}>Seja bem-vindo ao nosso portfólio dedicado à lataria e pintura de caminhões! Aqui, você encontrará uma extensa galeria de trabalhos realizados com excelência e dedicação, representando uma ampla gama de projetos que refletem nossa expertise e compromisso com a qualidade</p>
        <p className="content" style={{color:"white"}}>Ao explorar nosso portfólio, você terá a oportunidade de ver em detalhes os resultados surpreendentes dos nossos projetos passados. Cada imagem conta uma história de habilidade artesanal, precisão técnica e dedicação à excelência.</p>
      </div>
      {/* <center>
        <div className={"gallery"}>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : -100}}
              whileInView={{opacity : 1, x : 0}}
              
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.5,delay:0.4,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhao1.png"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : 100}}
              whileInView={{opacity : 1, x : 0}}
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.8,delay:0.25,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhaoazul.webp"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : -100}}
              whileInView={{opacity : 1, x : 0}}
              
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.8,delay:0.25,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhaovermelho1.webp"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : 100}}
              whileInView={{opacity : 1, x : 0}}
              
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.8,delay:0.25,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhaovermelho2.webp"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : -100}}
              whileInView={{opacity : 1, x : 0}}
              
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.5,delay:0.4,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhaobranco.jpg"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
          <motion.div
              className={"imageContainer"}
              style={{ justifyContent: "center" }}
              initial={{opacity : 0, x : 100}}
              whileInView={{opacity : 1, x : 0}}
              
              whileHover={{scale: 1.2,transition: { duration: 0.8 }}}
              whileTap={{ scale: 1.4,transition: { duration: 0.8 }}}
              transition={{duration: 0.8,delay:0.25,ease:"easeOut"}}
          >
              <CustomImage
                  imageSource={"caminhaovermelho3.jpg"}
                  imageStyle={{ width: "50%" }}
              />
          </motion.div>
      </div>
     </center> */}
     <ParallaxScroll images={images} />;
     
     <div className="sectionDiv">
        <p className="content" style={{color:"white"}}>
        Em resumo, nosso portfólio não é apenas uma vitrine dos nossos trabalhos passados, mas sim um testemunho do nosso compromisso em fornecer os mais altos padrões de qualidade e satisfação do cliente em cada projeto que realizamos.
         Estamos ansiosos para ajudá-lo a transformar a aparência do seu caminhão e garantir que ele se destaque na estrada
        </p> 
        </div>
    </section>

  </>
  )
}
export default Sobre;

const images = [
    "caminhaoazul.webp",
    "caminhaovermelho1.webp",
    "caminhaovermelho2.webp",
    "caminhaobranco.jpg",
    "caminhaovermelho3.jpg",
    "caminhaopreto.jpeg",
    "caminhaopreto2.jpeg",
    "caminhaobranco.jpeg",
    "caminhaobranco2.jpeg",
    "caminhaoazul.jpeg",
    "caminhaovermelho4.jpeg",
    "arrumando.jpeg",
    "caminhaoazul.webp",
    "caminhaovermelho1.webp",
    "caminhaovermelho2.webp",
    "caminhaobranco.jpg",
    "caminhaovermelho3.jpg",
    "caminhaopreto.jpeg",
    "caminhaopreto2.jpeg",
    "caminhaobranco.jpeg",
    "caminhaobranco2.jpeg",
    "caminhaoazul.jpeg",
    "caminhaovermelho4.jpeg",
    "arrumando.jpeg",
    "caminhaoazul.webp",
    "caminhaovermelho2.webp",
    "caminhaobranco.jpg",
    ];