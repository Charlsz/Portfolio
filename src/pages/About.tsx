import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Professional Experience</h2>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">HRG SOLUCIONES S.A.S</h3>
            <p className="text-gray-600 dark:text-gray-400">FullStack Developer</p>
            <p className="text-gray-500 dark:text-gray-500">Cartagena de Indias, Colombia | January 2024–December 2024</p>
            <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
              <li>Design, development, and maintenance of responsive and functional websites</li>
              <li>Implementation of technologies such as HTML, CSS, JavaScript, and modern frameworks</li>
              <li>Integration of databases and backend tools</li>
              <li>Collaboration with clients and internal teams</li>
              <li>SEO optimization and accessibility best practices</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Teleperformance</h3>
            <p className="text-gray-600 dark:text-gray-400">Customer Service</p>
            <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | December 2024–January 2025</p>
            <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
              <li>Addressing and resolving customer inquiries</li>
              <li>Efficiently managing requests and providing effective solutions</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Education</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Universidad del Norte</h3>
            <p className="text-gray-600 dark:text-gray-400">Systems and Computer Engineer</p>
            <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | June 2021 - Currently</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Technical Skills</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
              <li>Programming Languages: Python, Java, JavaScript, Swift, SQL, NoSQL</li>
              <li>Web Development: HTML, CSS, JavaScript, Responsive Design</li>
              <li>Data Modeling and Management</li>
              <li>Site Optimization and Performance</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;