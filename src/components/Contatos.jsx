import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Contatos() {
    const [ref, inView] = useInView({
        threshold: 0.5,
        triggerOnce: false
      });
    
      const variants = {
        visible: { opacity: 1, scale: 1},
        hidden: {opacity: 0,scale: 0.65}
      };
      const Mailto = ({ email, subject = '', body = '', children }) => {
        let params = subject || body ? '?' : '';
        if (subject) params += `subject=${encodeURIComponent(subject)}`;
        if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;
      
        return <a href={`mailto:${email}${params}`}>{children}</a>;
      };

      const[formData,setFormData] = useState({
        email:"",
        assunto:"",
        mensagem:""
      });
    return (
      <div id="contact">
        <motion.div animate={inView ? "visible" : "hidden"} variants={variants} exit="hidden" transition={{ duration: 2, ease: "easeOut" }} className="w-auto my-32 mx-20" ref={ref}>
                
            <section className="text-gray-700 body-font relative">
            <div className="w-full mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                <h1 className="text-3xl font-Oswald font-semibold title-font mb-4 text-black">
                    Solicite seu orçamento
                </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex lg:flex-wrap flex-col m-2">
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label for="email" className="leading-7 text-sm text-black">
                        Email
                        </label>
                        <input
                        type="text"
                        id="email"
                        name="email"
                        onChange ={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label
                        for="assunto"
                        className="leading-7 text-sm text-black"
                        >
                        Assunto
                        </label>
                        <input
                        type="assunto"
                        id="assunto"
                        onChange ={(e) => setFormData({...formData, assunto: e.target.value})}  className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <div className="relative">
                        <label
                        for="message"
                        className="leading-7 text-sm text-black"
                        >
                        Mensagem
                        </label>
                        <textarea
                        id="mensagem"
                        name="mensagem"
                        onChange ={(e) => setFormData({...formData, mensagem: e.target.value})}
                        className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        ></textarea>
                    </div>
                    </div>
                    <div className="p-2 w-full">
                    <Mailto email={formData.email} subject={formData.assunto} body={formData.mensagem}>
                        <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                        
                            Orçamento
                        
                        </button>
                    </Mailto>
                    </div>
                    {/* <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                    // {/* <a className="text-black">claudio.evangelista@gmail.com</a> */}
    
             
                    {/* </div> */}
                    </div>
                </div>
            </div>
            </section>
        </motion.div>
      </div>
    );
  }
