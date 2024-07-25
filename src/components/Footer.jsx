import { FaInstagram,FaWhatsapp} from "react-icons/fa";
export default function Footer(){
return(
    <footer className="bg-gray-800 p-4 mt-10 text-center lg:text-left">
        <div className="text-white text-xl lg:text-left">Outras formas de contato: 
        <div className="flex flex-wrap flex-row text-white">    
            <a href="https://www.instagram.com/reforma_truckevangelista/"><FaInstagram color="white" size={32} className="m-3"/>Instagram</a></div>
        </div>
        <div className="flex text-white">
        <a href="https://api.whatsapp.com/send/?phone=554192181012&text&type=phone_number&app_absent=0">
        <FaWhatsapp color="white" size={32} className="m-3"/> Whatsapp
        </a>
            </div>
        <p className="text-white text-2xl"> claudio.evangelista@gmail.com</p>
  {/* <div className="bg-black/5 p-4  lg:text-right text-center text-white text-surface">
    © 2024 —    <a href="https://matheusevangelista.vercel.app/">Matheus Santos Evangelista</a>
    <br/>Contatos:<FaInstagram />
  </div> */}
</footer>
)
}