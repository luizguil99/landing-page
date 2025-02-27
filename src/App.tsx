import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Add padding to account for fixed navbar */}
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
