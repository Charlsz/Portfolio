import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
  delay?: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
  tags,
  delay = 0,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      className="group bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <div
            className={`absolute inset-0 bg-gray-200 dark:bg-gray-700 transition-opacity duration-300 ${
              imageLoaded ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <div className="flex items-center justify-center h-full">
              <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin" />
            </div>
          </div>
          <img
            src={image}
            alt={`${title} screenshot`}
            className={`w-full h-full object-cover transition-all duration-500 ${
              isHovered ? 'scale-110' : 'scale-100'
            } ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
          />
          <div
            className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${
              isHovered ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
          >
            {liveUrl && (
              <AnimatedButton
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
                icon={ExternalLink}
                className="bg-white/90 text-gray-900 hover:bg-white"
              />
            )}
            {githubUrl && (
              <AnimatedButton
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                size="sm"
                icon={Github}
                className="bg-white/90 text-gray-900 hover:bg-white"
              />
            )}
          </div>
        </div>
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {title}
          </h3>
          {!image && (liveUrl || githubUrl) && (
            <div className="flex space-x-2">
              {liveUrl && (
                <AnimatedButton
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="sm"
                  icon={ExternalLink}
                />
              )}
              {githubUrl && (
                <AnimatedButton
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="ghost"
                  size="sm"
                  icon={Github}
                />
              )}
            </div>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={tag}
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full transition-all duration-200 hover:scale-105"
              style={{ animationDelay: `${delay + index * 50}ms` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;