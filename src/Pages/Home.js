import React from 'react';
import NavigationBar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Team from '../components/Team';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function App() {
    return (
        <div>
            <NavigationBar />
            <Hero />
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
