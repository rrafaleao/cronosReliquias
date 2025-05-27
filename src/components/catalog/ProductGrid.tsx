import React from 'react';
import ProductCard from './ProductCard';
import { Product } from '../../types/catalog';
import { Clock } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="flex justify-center mb-4">
          <Clock size={40} className="text-gold/50" />
        </div>
        <h3 className="text-white font-serif text-xl mb-2">Nenhum produto encontrado</h3>
        <p className="text-gray-400 font-sans">
          Tente ajustar os filtros para ver mais produtos.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductGrid;