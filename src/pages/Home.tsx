import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
          Carlos Andrés Galvis Pájaro
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
          FullStack Developer & AI Enthusiast
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          I'm a passionate and creative person with expertise in web development and AI training.
          Focused on problem-solving, continuous learning, and adapting to dynamic environments.
        </p>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Charlsz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Github className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/cgalvisp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Linkedin className="h-8 w-8" />
          </a>
          <a
            href="mailto:cgalvis21_@hotmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Mail className="h-8 w-8" />
          </a>
          <a
            href="tel:+573166610293"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <Phone className="h-8 w-8" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;