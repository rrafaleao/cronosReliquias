import React, { useState } from 'react';
import { FilterOptions } from '../../types/catalog';
import { Clock, Filter } from 'lucide-react';

interface CatalogFiltersProps {
  onFilterChange: (filters: FilterOptions) => void;
}

const CatalogFilters: React.FC<CatalogFiltersProps> = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    period: 'all',
    style: 'all',
  });

  const toggleFilters = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (key: keyof FilterOptions, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const periods = [
    { value: 'all', label: 'Todos os Períodos' },
    { value: 'victorian', label: 'Era Vitoriana (1837-1901)' },
    { value: 'edwardian', label: 'Era Eduardiana (1901-1910)' },
    { value: 'artdeco', label: 'Art Déco (1920-1939)' },
    { value: 'midcentury', label: 'Meados do Século XX (1940-1960)' },
    { value: 'vintage', label: 'Vintage (1960-1980)' },
  ];

  const styles = [
    { value: 'all', label: 'Todos os Estilos' },
    { value: 'pocket', label: 'Relógios de Bolso' },
    { value: 'wristwatch', label: 'Relógios de Pulso' },
    { value: 'pendulum', label: 'Relógios de Pêndulo' },
    { value: 'chronograph', label: 'Cronógrafos' },
    { value: 'marine', label: 'Cronômetros Marinhos' },
  ];

  return (
    <div className="bg-timepiece-800/40 rounded-lg border border-gold/20 overflow-hidden">
      <div 
        className="p-4 flex items-center justify-between cursor-pointer"
        onClick={toggleFilters}
      >
        <div className="flex items-center">
          <Filter size={20} className="text-gold mr-2" />
          <h2 className="text-white font-serif text-xl">Filtros</h2>
        </div>
        <button className="text-gold">
          <svg
            className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      
      {isOpen && (
        <div className="p-6 border-t border-gold/20 animate-slide-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Period Filter */}
            <div>
              <h3 className="text-gold font-serif text-lg mb-4 flex items-center">
                <Clock size={18} className="mr-2" />
                Período Histórico
              </h3>
              <div className="space-y-3">
                {periods.map((period) => (
                  <div key={period.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`period-${period.value}`}
                      name="period"
                      value={period.value}
                      checked={filters.period === period.value}
                      onChange={() => handleFilterChange('period', period.value)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`period-${period.value}`}
                      className={`flex items-center cursor-pointer text-sm font-sans ${
                        filters.period === period.value ? 'text-gold' : 'text-gray-300'
                      }`}
                    >
                      <span 
                        className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                          filters.period === period.value 
                            ? 'border-gold bg-gold/20' 
                            : 'border-gray-500'
                        }`}
                      >
                        {filters.period === period.value && (
                          <span className="w-2 h-2 rounded-full bg-gold"></span>
                        )}
                      </span>
                      {period.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Style Filter */}
            <div>
              <h3 className="text-gold font-serif text-lg mb-4">Estilo</h3>
              <div className="space-y-3">
                {styles.map((style) => (
                  <div key={style.value} className="flex items-center">
                    <input
                      type="radio"
                      id={`style-${style.value}`}
                      name="style"
                      value={style.value}
                      checked={filters.style === style.value}
                      onChange={() => handleFilterChange('style', style.value)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`style-${style.value}`}
                      className={`flex items-center cursor-pointer text-sm font-sans ${
                        filters.style === style.value ? 'text-gold' : 'text-gray-300'
                      }`}
                    >
                      <span 
                        className={`w-4 h-4 mr-2 rounded-full border flex items-center justify-center ${
                          filters.style === style.value 
                            ? 'border-gold bg-gold/20' 
                            : 'border-gray-500'
                        }`}
                      >
                        {filters.style === style.value && (
                          <span className="w-2 h-2 rounded-full bg-gold"></span>
                        )}
                      </span>
                      {style.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CatalogFilters;