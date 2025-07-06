import React from 'react';
import { Code2, Moon, Sun, Menu, X } from 'lucide-react';
import AnimatedButton from './AnimatedButton';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  isMenuOpen, 
  setIsMenuOpen, 
  isDarkMode, 
  toggleDarkMode,
  onNavClick 
}) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/95 dark:bg-gray-800/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => onNavClick('home')} 
            className="flex items-center space-x-2 group transition-all duration-200 hover:scale-105"
          >
            <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400 transition-transform duration-200 group-hover:rotate-12" />
            <span className="text-xl font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
              Carlos Galvis
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-blue-100 dark:bg-blue-900 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-200 opacity-20" />
              </button>
            ))}
            <AnimatedButton onClick={toggleDarkMode} variant="ghost" size="sm">
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-gray-600" />
              )}
            </AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <AnimatedButton
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            variant="ghost"
            size="sm"
            className="md:hidden"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600 dark:text-gray-300" />
            )}
          </AnimatedButton>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-slide-down">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavClick(item.id)}
                className="block w-full text-left py-3 px-4 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 hover:translate-x-2"
              >
                {item.label}
              </button>
            ))}
            <AnimatedButton
              onClick={toggleDarkMode}
              variant="ghost"
              className="w-full justify-start py-3 px-4"
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </AnimatedButton>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;