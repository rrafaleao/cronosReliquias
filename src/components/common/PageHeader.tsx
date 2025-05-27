import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  bgImage: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, bgImage }) => {
  return (
    <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-onyx/70"></div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="font-serif text-4xl md:text-6xl text-white mb-4">
          {title}
        </h1>
        <p className="text-gray-200 max-w-2xl mx-auto font-sans">
          {subtitle}
        </p>
        
        <div className="mt-8 flex justify-center">
          <div className="h-1 w-24 bg-gold"></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;