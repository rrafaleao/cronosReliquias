import React, { useState, useEffect, useRef } from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const Timeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<number>(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  // Sample timeline data
  const events: TimelineEvent[] = [
    {
      year: '1975',
      title: 'Fundação',
      description: 'A Cronos Relíquias foi fundada por João Oliveira, um mestre relojoeiro apaixonado por peças históricas.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/flag.png',
    },
    {
      year: '1982',
      title: 'Primeira Loja',
      description: 'Inauguração da primeira loja física no centro histórico de Porto Alegre, especializada em restauração.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/shop.png',
    },
    {
      year: '1995',
      title: 'Expansão Internacional',
      description: 'Início das operações internacionais, com parcerias com colecionadores europeus e americanos.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/globe.png',
    },
    {
      year: '2005',
      title: 'Centro de Formação',
      description: 'Criação do centro de formação de novos relojoeiros, mantendo viva a tradição do artesanato de precisão.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/graduation-cap.png',
    },
    {
      year: '2015',
      title: 'Inovação Tecnológica',
      description: 'Integração de tecnologias modernas ao processo de restauração, mantendo a fidelidade às técnicas originais.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/idea.png',
    },
    {
      year: '2025',
      title: 'Presente',
      description: 'Atualmente, somos referência em restauração e comercialização de relógios históricos em toda América Latina.',
      icon: 'https://img.icons8.com/ios-filled/50/CFB53B/clock.png',
    },
  ];

  // Auto-scroll through timeline events
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveEvent((prev) => (prev + 1) % events.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [events.length]);

  // Scroll active event into view
  useEffect(() => {
    if (timelineRef.current) {
      const scrollPosition = activeEvent * 200; // Approximate width of each event
      timelineRef.current.scrollTo({
        left: scrollPosition - 100, // Center the active event
        behavior: 'smooth',
      });
    }
  }, [activeEvent]);

  return (
    <div className="relative mx-auto max-w-6xl">
      {/* Timeline line */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-gold/30 transform -translate-y-1/2"></div>
      
      {/* Timeline events container */}
      <div 
        ref={timelineRef}
        className="relative flex overflow-x-auto pb-8 hide-scrollbar snap-x snap-mandatory"
      >
        {events.map((event, index) => (
          <div 
            key={index} 
            className={`flex-none w-60 mx-8 snap-center ${
              index === activeEvent ? 'scale-105 transition-transform duration-300' : ''
            }`}
            onClick={() => setActiveEvent(index)}
          >
            <div className="relative">
              {/* Timeline node */}
              <div 
                className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                  index === activeEvent ? 'bg-gold border-gold scale-125' : 'bg-midnight border-gold/50'
                }`}
              ></div>
              
              {/* Year */}
              <div className={`text-center mb-8 pt-6 font-serif text-2xl transition-colors duration-300 ${
                index === activeEvent ? 'text-gold' : 'text-gold/60'
              }`}>
                {event.year}
              </div>
              
              {/* Content */}
              <div 
                className={`bg-timepiece-800/40 p-6 rounded-lg border transition-all duration-300 ${
                  index === activeEvent 
                    ? 'border-gold shadow-gear transform translate-y-0 opacity-100' 
                    : 'border-gold/20 opacity-70 transform translate-y-4'
                }`}
              >
                <div className="flex justify-center mb-4">
                  <img src={event.icon} alt={event.title} className="w-12 h-12" />
                </div>
                <h3 className="font-serif text-xl text-white text-center mb-3">{event.title}</h3>
                <p className="text-gray-300 text-sm font-sans text-center">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation arrows */}
      <div className="flex justify-between mt-8">
        <button 
          onClick={() => setActiveEvent((prev) => (prev - 1 + events.length) % events.length)}
          className="bg-timepiece-800/50 hover:bg-timepiece-700 text-gold p-3 rounded-full transition-colors"
          aria-label="Previous event"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button 
          onClick={() => setActiveEvent((prev) => (prev + 1) % events.length)}
          className="bg-timepiece-800/50 hover:bg-timepiece-700 text-gold p-3 rounded-full transition-colors"
          aria-label="Next event"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Custom styles for hiding scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Timeline;