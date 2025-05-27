import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="h-screen relative flex items-center overflow-hidden">
        <video 
          className="absolute w-full h-full object-cover" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-watch-mechanism-running-at-close-range-32309-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-onyx/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-6xl text-white mb-6">
              <span className="text-gold">Preservando</span> a arte da relojoaria tradicional
            </h1>
            <p className="text-gray-300 mb-8 text-lg font-sans">
              Restauração, comercialização e manutenção de relógios históricos e peças raras com técnicas tradicionais.
            </p>
            <Link 
              to="/catalogo" 
              className="inline-flex items-center px-6 py-3 bg-gold text-onyx font-sans font-medium rounded hover:bg-goldLight transition-colors duration-300"
            >
              Explorar Catálogo
              <ArrowRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;