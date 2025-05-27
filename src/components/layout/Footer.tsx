import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-onyx pt-16 pb-8 border-t border-gold/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Clock size={24} className="text-gold" />
              <span className="font-serif text-xl font-bold text-white">
                <span className="text-gold">Cronos</span> Relíquias
              </span>
            </div>
            <p className="text-gray-400 mb-6 font-sans">
              Onde o passado encontra o futuro. Restauração e comercialização de relógios de época e peças raras.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-gold text-lg mb-6">Navegação</h3>
            <ul className="space-y-3">
              {['Home', 'Sobre Nós', 'Catálogo', 'Serviços', 'Galeria', 'Blog', 'Contato'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      to={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '-')}`}
                      className="text-gray-400 hover:text-gold transition-colors font-sans text-sm"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {[
                'Restauração de Relógios',
                'Avaliação de Peças',
                'Manutenção',
                'Customização',
                'Compra e Venda',
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-gold transition-colors font-sans text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-gold text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-copper mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400 font-sans text-sm">
                  Av. Relojoeiros, 1234 - Centro Histórico, Porto Alegre - RS
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-copper mr-3 flex-shrink-0" />
                <span className="text-gray-400 font-sans text-sm">(51) 3333-4444</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-copper mr-3 flex-shrink-0" />
                <span className="text-gray-400 font-sans text-sm">contato@cronosreliquias.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm font-sans">
          <p>© {new Date().getFullYear()} Cronos Relíquias. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;