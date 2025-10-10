import React from "react";
import { Terminal } from "lucide-react";

interface FooterProps {
  isDarkMode: boolean;
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, scrollToSection }) => {
  const navigationItems = [
    { label: "Inicio", id: "home" },
    { label: "Acerca", id: "about" },
    { label: "Habilidades", id: "skills" },
    { label: "Proyectos", id: "projects" },
    { label: "Contacto", id: "contact" },
  ];

  const technologies = [
    "React • Node.js",
    "JavaScript • Java • SQL",
    "HTML • CSS • Linux • Git",
  ];

  return (
    <footer
      className={`py-12 px-4 border-t ${
        isDarkMode ? "border-gray-700 bg-gray-900" : "border-gray-300 bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo y descripción */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
                <Terminal className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
                {"{dev} => portfolio"}
              </span>
            </div>
            <p
              className={`text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Alan Rodriguez - Estudiante de Ingeniería en Sistemas
              Computacionales
            </p>
          </div>

          {/* Navegación */}
          <div className="space-y-4">
            <h4
              className={`font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Navegación
            </h4>
            <div className="space-y-2 text-sm">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block hover:text-gray-600 transition-colors ${
                    isDarkMode
                      ? "text-gray-400 hover:text-gray-300"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tecnologías */}
          <div className="space-y-4">
            <h4
              className={`font-semibold ${
                isDarkMode ? "text-gray-200" : "text-gray-800"
              }`}
            >
              Tecnologías
            </h4>
            <div
              className={`space-y-2 text-sm ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-8 text-center">
          <p
            className={`text-sm ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            © 2025 Alan Rodriguez Portfolio. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
