import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({ title, description, tags, link }: ProjectCardProps) => {
  return (
    <div className="glass group rounded-3xl border border-white/5 overflow-hidden hover:border-neon-cyan/50 transition-all duration-500">
      <div className="aspect-video bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest">
            View Project
          </span>
        </div>
      </div>
      <div className="p-8">
        <div className="flex gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-neon-cyan/60 border border-neon-cyan/20 px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-cyan transition-colors">{title}</h3>
        <p className="text-text-primary/60 text-sm leading-relaxed mb-6">
          {description}
        </p>
        <a href={link} className="text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white transition-colors flex items-center gap-2">
          Read Case Study <span>→</span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
