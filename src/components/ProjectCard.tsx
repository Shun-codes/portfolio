import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image, 
  link 
}) => {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-lg transition">
      {image && (
        <div className="aspect-video bg-gray-100">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View Project →
          </a>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;