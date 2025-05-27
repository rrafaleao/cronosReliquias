import React, { useState, useRef } from 'react';
import { Product } from '../../types/catalog';
import { Search, Clock } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // Calculate mouse position for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
    }
  };

  return (
    <div 
      ref={cardRef}
      className="bg-timepiece-800/40 rounded-lg border border-gold/20 overflow-hidden transition-all duration-300 hover:shadow-gear"
      onMouseEnter={() => setIsHovered(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s' }}
    >
      <div className="relative overflow-hidden">
        <div 
          className="aspect-w-4 aspect-h-3 bg-cover bg-center transition-transform duration-500"
          style={{ 
            backgroundImage: `url(${product.image})`,
            transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent opacity-60"></div>
        </div>
        
        {/* Zoom icon */}
        <div 
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gold/90 flex items-center justify-center transition-opacity duration-300 cursor-pointer ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Search size={20} className="text-onyx" />
        </div>
        
        {/* Product details */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center space-x-2 mb-2">
            <span className="bg-copper text-white text-xs px-2 py-1 rounded-sm font-sans">
              {product.period === 'victorian' && 'Era Vitoriana'}
              {product.period === 'edwardian' && 'Era Eduardiana'}
              {product.period === 'artdeco' && 'Art Déco'}
              {product.period === 'midcentury' && 'Meados do Século XX'}
              {product.period === 'vintage' && 'Vintage'}
            </span>
            <span className="bg-timepiece-700 text-gray-200 text-xs px-2 py-1 rounded-sm font-sans">
              {product.style === 'pocket' && 'Relógio de Bolso'}
              {product.style === 'wristwatch' && 'Relógio de Pulso'}
              {product.style === 'pendulum' && 'Relógio de Pêndulo'}
              {product.style === 'chronograph' && 'Cronógrafo'}
              {product.style === 'marine' && 'Cronômetro Marinho'}
            </span>
          </div>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-serif text-white text-xl mb-2">{product.name}</h3>
        <div className="flex items-center text-gray-300 mb-3 font-sans text-sm">
          <Clock size={16} className="text-gold mr-2" />
          <span>{product.year}</span>
        </div>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 font-sans">{product.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-gold font-serif text-lg">{product.price}</span>
          <button className="bg-gold/90 hover:bg-gold text-onyx px-4 py-2 rounded text-sm font-sans font-medium transition-colors duration-300 flex items-center">
            Explorar Mecanismo
          </button>
        </div>
      </div>
      
      {/* Custom styles for aspect ratio */}
      <style jsx>{`
        .aspect-w-4 {
          position: relative;
          padding-bottom: calc(3 / 4 * 100%);
        }
        .aspect-w-4 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;