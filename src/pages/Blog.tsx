import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Blog</h1>
      <div className="space-y-6">
        {/* Blog posts will be added here */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-400">Blog posts under construction.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;