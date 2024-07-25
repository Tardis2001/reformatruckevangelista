import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false
      });
    
      const variants = {
        visible: { opacity: 1, scale: 1},
        hidden: {opacity: 0,scale: 0.65}
      };
    return(
        <div style={{backgroundImage:"url('local2.jpg')",backgroundSize:"0",backgroundRepeat:"no-repeat",backgroundPosition:"center"}} className="h-screen w-screen flex">
            <motion.div animate={inView ? "visible" : "hidden"} variants={variants} exit="hidden" transition={{ duration: 2, ease: "easeOut" }} className="w-auto my-32 mx-20" ref={ref}>
                <h1 className="font-semibold text-5xl font-Oswald text-white md:text-8xl lg:text-9xl">"Transforme seu <span className="text-yellow-500">caminhão</span> como novo outra vez!"</h1>
            </motion.div>
        </div>
    )
}