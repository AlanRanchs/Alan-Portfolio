import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Database,
  Globe,
  Cpu,
  ChevronDown,
} from "lucide-react";
import fotoAlan from "../../assets/Foto-Alan-CV.jpeg";
import TextType from "../ui/TextType";
import Button from "../ui/Button";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
  isDarkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection, isDarkMode }) => {
  return (
    <section id="home" className="pt-20 pb-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Mobile: Photo First */}
          <div className="lg:hidden relative order-1">
            <div className="flex flex-col items-center space-y-6">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={fotoAlan}
                    alt="Alan Rodriguez - Estudiante de Sistemas Computacionales"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 rounded-lg"></div>
              </div>

              {/* Geometric Elements */}
              <div className="flex space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl transform -rotate-12 hover:rotate-12 transition-transform duration-500 flex items-center justify-center shadow-xl">
                  <Database className="w-12 h-12 text-white" />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl transform rotate-12 hover:-rotate-12 transition-transform duration-500 flex items-center justify-center shadow-xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg transform rotate-45 hover:rotate-90 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <Cpu className="w-10 h-10 text-white transform -rotate-45" />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <TextType
                  text="Alan Rodriguez"
                  typingSpeed={75}
                  showCursor={true}
                  cursorCharacter="_"
                  as="span"
                  className={isDarkMode ? "text-white" : "text-gray-900"}
                  cursorClassName={isDarkMode ? "text-white" : "text-gray-900"}
                  loop={false}
                />
                <span className="block bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent"></span>
              </h1>
              <TextType
                text="Estudiante de Ingeniería en Sistemas Computacionales"
                typingSpeed={50}
                initialDelay={2500}
                showCursor={true}
                cursorCharacter="_"
                as="p"
                className={`text-xl lg:text-2xl opacity-80 ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
                cursorClassName={isDarkMode ? "text-white" : "text-gray-900"}
                loop={false}
              />
            </div>

            <p className="text-lg opacity-70 max-w-xl leading-relaxed">
              Estudiante de Ingeniería en Sistemas Computacionales cursando la
              especialidad en Ciberseguridad e IoT. Interesado en el desarrollo
              web, aplicaciones .NET y bases de datos. Busco aportar en
              proyectos tecnológicos que mejoren procesos y brinden soporte
              eficiente en entornos colaborativos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                href={`${import.meta.env.BASE_URL}CV-Alan Rodriguez.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                isDarkMode={isDarkMode}
              >
                Abrir CV
              </Button>
              <Button
                onClick={() => scrollToSection("contact")}
                isDarkMode={isDarkMode}
              >
                Contactar
              </Button>
            </div>
            <div className="flex space-x-6 pt-4">
              <a
                href="https://github.com/AlanRanchs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/alanrdz10/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:alanjrr.isc@gmailcom"
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Desktop: Profile Photo and Geometric Elements */}
          <div className="hidden lg:block relative order-2">
            <div className="flex flex-col items-center space-y-6">
              {/* Profile Photo */}
              <div className="relative group">
                <div className="w-64 h-64 rounded-2xl shadow-2xl overflow-hidden">
                  <img
                    src={fotoAlan}
                    alt="Alan Rodriguez - Estudiante de Sistemas Computacionales"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-500 rounded-lg"></div>
              </div>
              {/* Geometric Elements */}
              <div className="flex space-x-6">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl transform -rotate-12 hover:rotate-12 transition-transform duration-500 flex items-center justify-center shadow-xl">
                  <Database className="w-12 h-12 text-white" />
                </div>
                <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl transform rotate-12 hover:-rotate-12 transition-transform duration-500 flex items-center justify-center shadow-xl">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </div>

              <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg transform rotate-45 hover:rotate-90 transition-transform duration-500 flex items-center justify-center shadow-lg">
                <Cpu className="w-10 h-10 text-white transform -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <ChevronDown className="w-6 h-6 animate-bounce opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
