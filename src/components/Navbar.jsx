import React, { useState } from 'react';
import logo from './../assets/logo.png';

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-300 ease-in-out"
              aria-label="Main menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleMenu}
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex sm:items-stretch justify-around">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-right font-bold">
                ReformaTruck
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <a
                  href="/"
                  className="text-gray-300 font-Oswald  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold transition duration-300 ease-in-out"
                >
                  Inicio
                </a>
                {/* <a
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
                >
                  About
                </a> */}
                <a
                  href="#services"
                  className="text-gray-300 font-Oswald  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold transition duration-300 ease-in-out"
                >
                  Serviços
                </a>
                <a
                  href="#contact"
                  className="text-gray-300 font-Oswald  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold transition duration-300 ease-in-out"
                >
                  Contato
                </a>
                <a
                  href="#localizacao"
                  className="text-gray-300 font-Oswald  hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md font-semibold transition duration-300 ease-in-out"
                >
                  Localização
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } sm:hidden transition duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3">
          <a
            href="#"
            className="block font-Oswald px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Inicio
          </a>
          {/* <a
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Sobre 
          </a> */}
          <a
            href="#services"
            className="block font-Oswald px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Serviços
          </a>
             <a
                  href="#contact"
            className="block font-Oswald px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Contatos
          </a>
                <a
                  href="#localizacao"
            className="block font-Oswald px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
          >
            Localização
          </a>
        </div>
      </div>
    </nav>
  );
};
