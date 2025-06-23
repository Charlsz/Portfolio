import React from 'react';

const Projects: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project cards will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">Project showcase under construction.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;