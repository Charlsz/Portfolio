import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h1>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h2>
              <a 
                href="mailto:cgalvis21_@hotmail.com"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                cgalvis21_@hotmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h2>
              <a 
                href="tel:+573166610293"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                +57 316 661 0293
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h2>
              <a 
                href="https://www.linkedin.com/in/cgalvisp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                linkedin.com/in/cgalvisp
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Github className="h-6 w-6 text-gray-600 dark:text-gray-400" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-white">GitHub</h2>
              <a 
                href="https://github.com/Charlsz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                github.com/Charlsz
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Based in Colombia
            <br />
            Available for remote work worldwide
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;