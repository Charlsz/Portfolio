import React from 'react';
import { Code2, Github, Linkedin, Mail, Phone, ExternalLink, Download } from 'lucide-react';
import CodeFlow from './components/CodeFlow';
import Navbar from './components/Navbar';
import AnimatedSection from './components/AnimatedSection';
import AnimatedButton from './components/AnimatedButton';
import ProjectCard from './components/ProjectCard';
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isDarkMode, setIsDarkMode] = React.useState(true); // Set dark mode as default
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <LoadingSpinner size="lg" />
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading portfolio...</p>
        </div>
      </div>
    );
  }

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
        <section id="home" className="min-h-[calc(100vh-5rem)] flex items-center justify-center">
          <AnimatedSection className="max-w-4xl text-center" animation="fadeIn">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Carlos Andrés Galvis Pájaro
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineering Student
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              I'm a Systems Engineering student with experience in web development, especially using HTML, CSS, and JavaScript. I enjoy creating accessible, functional, and well-designed websites. I'm passionate about learning new technologies, collaborating in teams, and solving problems creatively.
            </p>
            <div className="flex justify-center space-x-6">
              <AnimatedButton
                href="https://github.com/Charlsz"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                icon={Github}
              >
              </AnimatedButton>
              <AnimatedButton
                href="https://www.linkedin.com/in/cgalvisp/"
                target="_blank"
                rel="noopener noreferrer"
                variant="ghost"
                icon={Linkedin}
              >
              </AnimatedButton>
              <AnimatedButton
                href="mailto:cgalvis21_@hotmail.com"
                variant="ghost"
                icon={Mail}
              >
              </AnimatedButton>
              <AnimatedButton
                href="tel:+573166610293"
                variant="ghost"
                icon={Phone}
              >
              </AnimatedButton>
            </div>
          </AnimatedSection>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
            </AnimatedSection>
            
            <div className="space-y-8">
              <section>
                <AnimatedSection animation="slideLeft" delay={200}>
                  <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Professional Experience</h3>
                </AnimatedSection>
                
                <AnimatedSection animation="fadeIn" delay={300} className="mb-6">
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">HRG SOLUCIONES S.A.S</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web Developer</p>
                  <p className="text-gray-500 dark:text-gray-500">Cartagena de Indias, Colombia | January 2024–December 2024</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Design, development, and maintenance of responsive and functional websites</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Implementation of technologies such as HTML, CSS, JavaScript, and modern frameworks</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Integration of databases and backend tools</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Collaboration with clients and internal teams</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">SEO optimization and accessibility best practices</li>
                  </ul>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation="fadeIn" delay={400}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Teleperformance</h4>
                  <p className="text-gray-600 dark:text-gray-400">Customer Service</p>
                  <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | December 2024–January 2025</p>
                  <ul className="list-disc list-inside mt-4 text-gray-600 dark:text-gray-400">
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Addressing and resolving customer inquiries</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Efficiently managing requests and providing effective solutions</li>
                  </ul>
                  </div>
                </AnimatedSection>
              </section>

              <section>
                <AnimatedSection animation="slideLeft" delay={500}>
                  <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Education</h3>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={600}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Universidad del Norte</h4>
                  <p className="text-gray-600 dark:text-gray-400">Systems and Computer Engineer</p>
                  <p className="text-gray-500 dark:text-gray-500">Barranquilla, Colombia | June 2021 - Currently</p>
                  </div>
                </AnimatedSection>
              </section>

              <section>
                <AnimatedSection animation="slideLeft" delay={700}>
                  <h3 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Technical Skills</h3>
                </AnimatedSection>
                <AnimatedSection animation="fadeIn" delay={800}>
                  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Programming Languages: Python, Java, JavaScript, Swift, SQL, NoSQL</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Web Development: HTML, CSS, JavaScript, Responsive Design</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Data Modeling and Management</li>
                    <li className="transform transition-transform duration-200 hover:translate-x-2">Site Optimization and Performance</li>
                  </ul>
                  </div>
                </AnimatedSection>
              </section>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Projects</h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              
              {/* Pixel Runner Project */}
              <AnimatedSection animation="fadeIn" delay={200}>
                <ProjectCard
                  title="Pixel Runner"
                  description="Endless Runner game featuring pixel art graphics and smooth gameplay mechanics."
                  image="/{B36547E7-5BCC-4201-B0D4-E5CC7C13B1C0}.png"
                  liveUrl="https://pixelrunnergame.netlify.app/"
                  tags={["Game Development", "JavaScript", "HTML5 Canvas"]}
                  delay={0}
                />
              </AnimatedSection>

              {/* HRG Soluciones Project */}
              <AnimatedSection animation="fadeIn" delay={300}>
                <ProjectCard
                  title="HRG Soluciones S.A.S"
                  description="HRG Soluciones S.A.S company website featuring electrical, construction, and maintenance services."
                  image="/{ED4F2EA9-2112-4E15-9DFE-5C901ADA7EE2}.png"
                  liveUrl="https://hrgsoluciones.com/"
                  tags={["Corporate Website", "Professional Services"]}
                  delay={100}
                />
              </AnimatedSection>

              {/* Tera Studios Project */}
              <AnimatedSection animation="fadeIn" delay={400}>
                <ProjectCard
                  title="Tera Studios"
                  description="Tera Studios company website featuring modern design and professional presentation."
                  image="/{7BC4F869-FFB6-450B-BF17-083A6463A165}.png"
                  liveUrl="https://terastudios.netlify.app/"
                  tags={["Web Development", "Company Website"]}
                  delay={200}
                />
              </AnimatedSection>

              {/* SimpleOS Project */}
              <AnimatedSection animation="fadeIn" delay={500}>
                <ProjectCard
                  title="SimpleOS"
                  description="A web-based terminal simulator using React + TypeScript, supporting basic system commands."
                  image="/{0BF25356-28BA-45AE-BB5B-96181DF2CDAA}.png"
                  liveUrl="https://simpleoscharlsz.netlify.app/"
                  tags={["React", "TypeScript", "Terminal Simulator"]}
                  delay={300}
                />
              </AnimatedSection>

              {/* SVG Half-tone Filter Project */}
              <AnimatedSection animation="fadeIn" delay={600}>
                <ProjectCard
                  title="SVG Half-tone Filter"
                  description="Interactive SVG filter application that applies half-tone effects to images with real-time preview."
                  image="/{B36547E7-5BCC-4201-B0D4-E5CC7C13B1C0}.png"
                  liveUrl="https://image-svg-filter.netlify.app/"
                  tags={["SVG", "Image Processing", "Interactive Design"]}
                  delay={400}
                />
              </AnimatedSection>

              {/* World Time Website Project */}
              <AnimatedSection animation="fadeIn" delay={700}>
                <ProjectCard
                  title="World Time Website"
                  description="Beautiful world clock application displaying time zones from major cities around the globe with live updates."
                  image="/{ED4F2EA9-2112-4E15-9DFE-5C901ADA7EE2}.png"
                  liveUrl="https://times-zones-world.netlify.app/"
                  tags={["Time Zones", "Real-time Data", "Global Interface"]}
                  delay={500}
                />
              </AnimatedSection>

              {/* Climate App Project */}
              <AnimatedSection animation="fadeIn" delay={800}>
                <ProjectCard
                  title="Climate App"
                  description="Web application that estimates temperature anomalies based on CO2 levels using a machine learning model."
                  githubUrl="https://github.com/Charlsz/Climate_app"
                  tags={["Machine Learning", "Climate Analysis", "Data Science"]}
                  delay={600}
                />
              </AnimatedSection>
            </div>

            {/* GitHub Link Section */}
            <AnimatedSection animation="scaleIn" delay={900}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                To see more of my projects, feel free to check out my GitHub profile :)
              </p>
              <AnimatedButton
                href="https://github.com/Charlsz"
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                icon={Github}
                iconPosition="left"
                className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100"
              >
                Visit GitHub Profile
              </AnimatedButton>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Resume / Hoja de vida Section */}
        <section id="resume" className="py-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Resume / Hoja de vida</h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                Here you can download my resume in the language of your choice:
              </p>
              
              <div className="space-y-6">
                {/* English Resume */}
                <AnimatedSection animation="slideLeft" delay={300}>
                  <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Resume (English)</h3>
                  </div>
                  <AnimatedButton
                    href="/Resume_Carlos_Galvis.pdf"
                    variant="primary"
                    icon={Download}
                    iconPosition="left"
                  >
                    Download PDF
                  </AnimatedButton>
                  </div>
                </AnimatedSection>

                {/* Spanish Resume */}
                <AnimatedSection animation="slideRight" delay={400}>
                  <div className="flex items-center justify-between p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-300 hover:scale-[1.02]">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Hoja de vida (Español)</h3>
                  </div>
                  <AnimatedButton
                    href="/Hoja_de_vida_Carlos_Galvis.pdf"
                    variant="primary"
                    icon={Download}
                    iconPosition="left"
                    className="bg-green-600 hover:bg-green-700 focus:ring-green-500"
                  >
                    Descargar PDF
                  </AnimatedButton>
                  </div>
                </AnimatedSection>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="py-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Blog</h2>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection animation="fadeIn" delay={200}>
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.05] hover:shadow-xl">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Coming Soon</h3>
                <p className="text-gray-600 dark:text-gray-400">Blog posts under construction.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection animation="slideUp">
              <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-8">Contact Me</h2>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeIn" delay={200}>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm always open to new opportunities and collaborations. Feel free to reach out through any of the following channels:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 transform transition-all duration-200 hover:translate-x-2">
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

                <div className="flex items-center space-x-4 transform transition-all duration-200 hover:translate-x-2">
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

                <div className="flex items-center space-x-4 transform transition-all duration-200 hover:translate-x-2">
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

                <div className="flex items-center space-x-4 transform transition-all duration-200 hover:translate-x-2">
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

              <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-700 rounded-lg transform transition-all duration-200 hover:scale-[1.02]">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Location</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Based in Colombia
                  <br />
                  Available for remote work worldwide
                </p>
              </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;