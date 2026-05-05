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
      className={`max-w-7xl mx-auto px-6 py-24 md:py-32 ${className}`}
    >
      {children}
    </section>
  );
};

export default Section;
