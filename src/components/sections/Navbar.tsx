import React from "react";
import { Terminal } from "lucide-react";
import ThemeSwitch from "../ui/ThemeSwitch";

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isMenuOpen,
  setIsMenuOpen,
  isDarkMode,
  toggleTheme,
  activeSection,
  scrollToSection,
}) => {
  return (
    <nav
      className={`fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300 ${
        isDarkMode
          ? "bg-gray-900/90 border-gray-700"
          : "bg-gray-50/90 border-gray-300"
      } border-b`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              {"{dev} => portfolio"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize transition-colors duration-200 hover:text-gray-600 ${
                  activeSection === item ? "text-gray-600" : ""
                }`}
              >
                {item === "home"
                  ? "Inicio"
                  : item === "about"
                  ? "Acerca"
                  : item === "skills"
                  ? "Habilidades"
                  : item === "projects"
                  ? "Proyectos"
                  : "Contacto"}
              </button>
            ))}
            <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeSwitch isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors relative w-10 h-10 flex items-center justify-center"
            >
              {/* Hamburger Menu Animation */}
              <div className="w-6 h-6 relative">
                <span
                  className={`absolute left-0 top-1 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "rotate-45 translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-3 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute left-0 top-5 w-6 h-0.5 bg-current transform transition-all duration-300 ease-in-out ${
                    isMenuOpen
                      ? "-rotate-45 -translate-y-2"
                      : "rotate-0 translate-y-0"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-300 dark:border-gray-700">
            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-2 capitalize hover:text-gray-600 transition-colors"
              >
                {item === "home"
                  ? "Inicio"
                  : item === "about"
                  ? "Acerca"
                  : item === "skills"
                  ? "Habilidades"
                  : item === "projects"
                  ? "Proyectos"
                  : "Contacto"}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
