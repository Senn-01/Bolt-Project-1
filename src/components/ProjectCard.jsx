import React from 'react';

export default function ProjectCard({ id, title, description, image, tags }) {
  return (
    <div className="bg-brand-white/10 rounded-lg p-6 hover:bg-brand-white/20 transition-all">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-brand-gold text-2xl font-bold mb-2">{title}</h2>
      <p className="text-brand-white mb-4">{description}</p>
      <div className="flex gap-2 mb-4">
        {tags.map(tag => (
          <span 
            key={tag} 
            className="bg-brand-gold/20 text-brand-gold px-2 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      <a 
        href={`/projects/${id}`} 
        className="bg-brand-gold text-brand-black px-4 py-2 rounded hover:opacity-90 transition-all"
      >
        View Project
      </a>
    </div>
  );
}
