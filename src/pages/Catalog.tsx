import React, { useState, useEffect } from 'react';
import PageHeader from '../components/common/PageHeader';
import CatalogFilters from '../components/catalog/CatalogFilters';
import ProductGrid from '../components/catalog/ProductGrid';
import { Product, FilterOptions } from '../types/catalog';
import { getCatalogData } from '../data/catalogData';

const Catalog: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState<FilterOptions>({
    period: 'all',
    style: 'all',
  });

  useEffect(() => {
    // Load product data
    const catalogData = getCatalogData();
    setProducts(catalogData);
    setFilteredProducts(catalogData);
  }, []);

  // Apply filters when they change
  useEffect(() => {
    let result = [...products];
    
    if (filters.period !== 'all') {
      result = result.filter(product => product.period === filters.period);
    }
    
    if (filters.style !== 'all') {
      result = result.filter(product => product.style === filters.style);
    }
    
    setFilteredProducts(result);
  }, [filters, products]);

  // Handle filter changes
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  return (
    <div className="pt-20">
      <PageHeader 
        title="Catálogo" 
        subtitle="Explore nossa coleção de relógios históricos e peças raras"
        bgImage="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-gradient-to-b from-onyx to-midnight">
        <div className="container mx-auto px-4">
          <CatalogFilters onFilterChange={handleFilterChange} />
          
          <div className="mt-12">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Catalog;