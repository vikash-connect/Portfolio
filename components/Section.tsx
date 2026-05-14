import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const Section = ({ children, id, className = "" }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`w-full py-24 md:py-32 flex flex-col items-center ${className}`}
    >
      <div className="w-full max-w-7xl px-6">
        {children}
      </div>
    </section>


  );
};

export default Section;
