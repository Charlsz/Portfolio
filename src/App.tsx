import React from 'react';
import { Code2, Github, Linkedin, Mail, Phone } from 'lucide-react';
import CodeFlow from './components/CodeFlow';
import Navbar from './components/Navbar';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(true); // Set dark mode as default

  React.useEffect(() => {
    const darkMode = localStorage.getItem('darkMode');
    // If no preference is stored, default to dark mode
    if (darkMode === null) {
      localStorage.setItem('darkMode', 'true');
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(darkMode === 'true');
      if (darkMode === 'true') {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
    localStorage.setItem('darkMode', (!isDarkMode).toString());
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-all duration-300`}>
      <CodeFlow />
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        onNavClick={scrollToSection}
      />
      
      <main className="container mx-auto px-4 pt-20">
        {/* Home Section */}
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center transform transition-all duration-500 hover:scale-[1.02]">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6 animate-fade-in">
              Carlos Andrés Galvis Pájaro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-slide-up">
              FullStack Developer & AI Enthusiast
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in">
              I'm a passionate and creative person with expertise in web development and AI training.
              Focused on problem-solving, continuous learning, and adapting to dynamic environments.
            </p>
            <div className="flex justify-center space-x-6 animate-bounce-in">
              <a
                href="https://github.com/Charlsz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="h-8 w-8" />
              </a>
              <a
                href="https://www.linkedin.com/in/cgalvisp/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-8 w-8" />
              </a>
              <a
                href="mailto:cgalvis21_@hotmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Mail className="h-8 w-8" />
              </a>
              <a
                href="tel:+573166610293"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:scale-110"
              >
                <Phone className="h-8 w-8" />
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 transform transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 animate-fade-in">About Me</h2>
            
            <div className="space-y-8">
              <section>
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-slide-up">Professional Experience</h3>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">HRG SOLUCIONES S.A.S</h4>
                  <p className="text-gray-600 dark:text-gray-400">FullStack Developer</p>
                  <p className="text-gray-500 dark:text-gray-500">Cartagena de Indias, Colombia | January 2024–December 2024</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
                    <li className="transform transition hover:translate-x-2">Design, development, and maintenance of responsive and functional websites</li>
                    <li className="transform transition hover:translate-x-2">Implementation of technologies such as HTML, CSS, JavaScript, and modern frameworks</li>
                    <li className="transform transition hover:translate-x-2">Integration of databases and backend tools</li>
                    <li className="transform transition hover:translate-x-2">Collaboration with clients and internal teams</li>
                    <li className="transform transition hover:translate-x-2">SEO optimization and accessibility best practices</li>
                  </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Teleperformance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Customer Service</p>
                  <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | December 2024–January 2025</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
                    <li className="transform transition hover:translate-x-2">Addressing and resolving customer inquiries</li>
                    <li className="transform transition hover:translate-x-2">Efficiently managing requests and providing effective solutions</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-slide-up">Education</h3>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Universidad del Norte</h4>
                  <p className="text-gray-600 dark:text-gray-400">Systems and Computer Engineer</p>
                  <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | June 2021 - Currently</p>
                </div>
              </section>

              <section>
                <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4 animate-slide-up">Technical Skills</h3>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li className="transform transition hover:translate-x-2">Programming Languages: Python, Java, JavaScript, Swift, SQL, NoSQL</li>
                    <li className="transform transition hover:translate-x-2">Web Development: HTML, CSS, JavaScript, Responsive Design</li>
                    <li className="transform transition hover:translate-x-2">Data Modeling and Management</li>
                    <li className="transform transition hover:translate-x-2">Site Optimization and Performance</li>
                  </ul>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 transform transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 animate-fade-in">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400">Project showcase under construction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20 transform transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 animate-fade-in">Blog</h2>
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400">Blog posts under construction.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 transform transition-all duration-500">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 animate-fade-in">Contact Me</h2>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Email</h3>
                    <a 
                      href="mailto:cgalvis21_@hotmail.com"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      cgalvis21_@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Phone</h3>
                    <a 
                      href="tel:+573166610293"
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      +57 316 661 0293
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <Linkedin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">LinkedIn</h3>
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

                <div className="flex items-center space-x-4 transform transition-all duration-300 hover:translate-x-2">
                  <Github className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">GitHub</h3>
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

              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Based in Colombia
                  <br />
                  Available for remote work worldwide
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;