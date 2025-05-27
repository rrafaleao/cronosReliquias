import React from 'react';
import Timeline from '../components/about/Timeline';
import TeamProfiles from '../components/about/TeamProfiles';
import PageHeader from '../components/common/PageHeader';
import { Clock } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <div className="pt-20">
      <PageHeader 
        title="Sobre Nós" 
        subtitle="Conheça nossa história e equipe de especialistas em relojoaria"
        bgImage="https://images.pexels.com/photos/859895/pexels-photo-859895.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
      
      <section className="py-16 bg-gradient-to-b from-onyx to-midnight">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <div className="flex justify-center mb-6">
              <Clock size={40} className="text-gold animate-gear-spin-slow" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6">Nossa História</h2>
            <p className="text-gray-300 font-sans leading-relaxed">
              A Cronos Relíquias nasceu da paixão pela arte da relojoaria e pelo valor histórico de cada peça. 
              Desde nossa fundação, trabalhamos para preservar a tradição e o artesanato de precisão, 
              restaurando relógios históricos e mantendo viva a herança da relojoaria clássica.
            </p>
          </div>
          
          <Timeline />
        </div>
      </section>
      
      <section className="py-16 bg-midnight">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-16 text-center">
            Conheça Nossa <span className="text-gold">Equipe</span>
          </h2>
          
          <TeamProfiles />
        </div>
      </section>
      
      <section className="py-16 bg-gradient-to-b from-midnight to-onyx">
        <div className="container mx-auto px-4">
          <div className="bg-timepiece-800/50 p-8 md:p-12 rounded-lg border border-gold/20 max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl text-white mb-6 text-center">
              Nossa Missão
            </h2>
            <p className="text-gray-300 font-sans leading-relaxed text-center mb-8">
              "Preservar a arte e a ciência da relojoaria tradicional, restaurando e comercializando 
              peças históricas com o máximo de fidelidade aos métodos originais, ao mesmo tempo em 
              que integramos inovações tecnológicas para garantir precisão e longevidade."
            </p>
            <div className="flex justify-center">
              <span className="inline-block h-1 w-16 bg-copper rounded-full"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;