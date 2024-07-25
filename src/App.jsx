import React from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Services from './components/Services'
import Localizacao from './components/Localizacao'
import Contatos from './components/Contatos'
import Footer from './components/Footer';
import MainAnimation from './components/background/MainAnimationbackground';
function App() {
  return (
    <div className='app'>
     <Navbar/>
      <Hero/>
      <MainAnimation/>
      <Services/>
      <Contatos/>
      <Localizacao/>
      <Footer/>
    </div>
  );
}

export default App;
