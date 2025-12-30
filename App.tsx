import React from 'react';
import MatrixRain from './components/MatrixRain';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Oracle from './components/Oracle';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-matrix-black text-white overflow-hidden selection:bg-matrix-green selection:text-black">
      {/* Visual Background */}
      <MatrixRain />
      
      {/* Overlay for readability */}
      <div className="fixed inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/80 pointer-events-none -z-5" />

      {/* Main Content */}
      <Navigation />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>

      <Footer />
      
      {/* AI Chat Widget */}
      <Oracle />
    </div>
  );
};

export default App;