import React from 'react';
import NavigationBar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import Team from '../components/Team/Team';
import Portfolio from '../components/Portfolio/Portfolio';
import Blog from '../components/Blog/Blog';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

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
