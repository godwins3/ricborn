import React from 'react';
import NavigationBar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';

import AboutHero from '../components/AboutHero/AboutHero'
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import { useEffect } from 'react'

function App() {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
    
    return (
        <div>
            <NavigationBar />
            <Hero />
            <AboutHero />
            <About />
            <Services />
            <Team />
            <Portfolio />
            <Blog />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
