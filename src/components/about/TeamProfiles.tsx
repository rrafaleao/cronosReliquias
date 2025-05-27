import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  specialty: string;
  experience: string;
  image: string;
}

const TeamProfiles: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const team: TeamMember[] = [
    {
      name: 'Ricardo Mendes',
      role: 'Mestre Relojoeiro',
      bio: 'Com mais de 30 anos de experiência, Ricardo é especialista em relógios mecânicos do século XIX e início do século XX.',
      specialty: 'Relógios de bolso e cronógrafos suíços',
      experience: '35 anos',
      image: 'https://images.pexels.com/photos/8961691/pexels-photo-8961691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Luísa Oliveira',
      role: 'Restauradora de Peças',
      bio: 'Formada em conservação e restauro, Luísa é responsável pela recuperação de detalhes e acabamentos originais.',
      specialty: 'Restauração de mostradores esmaltados',
      experience: '15 anos',
      image: 'https://images.pexels.com/photos/3756678/pexels-photo-3756678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Carlos Ferreira',
      role: 'Especialista em Avaliação',
      bio: 'Carlos é referência na avaliação e autenticação de relógios antigos, com um olhar preciso para peças raras.',
      specialty: 'Relógios art déco e art nouveau',
      experience: '28 anos',
      image: 'https://images.pexels.com/photos/8960464/pexels-photo-8960464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      name: 'Marina Santos',
      role: 'Historiadora',
      bio: 'Doutora em história da tecnologia, Marina documenta a procedência e contexto histórico de cada peça da coleção.',
      specialty: 'Relojoaria industrial britânica',
      experience: '12 anos',
      image: 'https://images.pexels.com/photos/6953537/pexels-photo-6953537.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <div 
          key={index}
          className="relative group perspective-1000"
          onMouseEnter={() => setHoveredMember(index)}
          onMouseLeave={() => setHoveredMember(null)}
        >
          <div 
            className={`relative transform transition-transform duration-500 preserve-3d ${
              hoveredMember === index ? 'rotate-y-180' : ''
            }`}
          >
            {/* Front of card */}
            <div className="backface-hidden">
              <div className="relative overflow-hidden rounded-lg group">
                <div className="aspect-w-3 aspect-h-4 w-full">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-onyx to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
                  <p className="text-gold font-sans text-sm">{member.role}</p>
                </div>
              </div>
            </div>

            {/* Back of card */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 bg-timepiece-800 rounded-lg border border-gold/30 p-6 flex flex-col">
              <h3 className="font-serif text-xl text-white mb-1">{member.name}</h3>
              <p className="text-gold font-sans text-sm mb-4">{member.role}</p>
              
              <p className="text-gray-300 font-sans text-sm mb-4 flex-grow">{member.bio}</p>
              
              <div className="border-t border-gold/20 pt-4">
                <div className="mb-2">
                  <span className="text-gold font-sans text-xs">Especialidade:</span>
                  <p className="text-white font-sans text-sm">{member.specialty}</p>
                </div>
                <div>
                  <span className="text-gold font-sans text-xs">Experiência:</span>
                  <p className="text-white font-sans text-sm">{member.experience}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Custom styles for 3D effect */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .aspect-w-3 {
          position: relative;
          padding-bottom: calc(4 / 3 * 100%);
        }
        .aspect-w-3 > * {
          position: absolute;
          height: 100%;
          width: 100%;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default TeamProfiles;