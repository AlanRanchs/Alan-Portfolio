import React, { useState, useEffect } from "react";
import {
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe2,
  Globe,
  Cpu,
  Moon,
  Sun,
  ChevronDown,
  Terminal,
  Server,
  Smartphone,
  User,
} from "lucide-react";
import fotoAlan from "./assets/Foto-Alan-CV.jpeg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const themeClasses = isDarkMode
    ? "bg-gray-900 text-gray-100"
    : "bg-gray-50 text-gray-900";

  const cardClasses = isDarkMode
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-gray-300";

  const contactBgClasses = isDarkMode
    ? "bg-gradient-to-br from-gray-800 to-gray-900"
    : "bg-gradient-to-br from-gray-100 to-gray-200";

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${themeClasses}`}
    >
      {/* Navigation */}
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
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
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
                )
              )}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
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
              {["home", "about", "skills", "projects", "contact"].map(
                (item) => (
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
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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
                  Alan Rodriguez
                  <span className="block bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 bg-clip-text text-transparent"></span>
                </h1>
                <p className="text-xl lg:text-2xl opacity-80">
                  Estudiante de Ingeniería en Sistemas Computacionales
                </p>
              </div>

              <p className="text-lg opacity-70 max-w-xl leading-relaxed">
                Estudiante de Ingeniería en Sistemas Computacionales cursando la
                especialidad en Ciberseguridad e IoT. Interesado en el
                desarrollo web, aplicaciones .NET y bases de datos. Busco
                aportar en proyectos tecnológicos que mejoren procesos y brinden
                soporte eficiente en entornos colaborativos.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={`${import.meta.env.BASE_URL}CV-Alan Rodriguez.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 inline-block"
                >
                  Abrir CV
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-gradient-to-r from-gray-600 to-gray-800 hover:from-gray-700 hover:to-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Contactar
                </button>
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

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              Acerca de Mí
            </span>
          </h2>

          <div className={`${cardClasses} rounded-2xl p-8 border shadow-xl`}>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Alan Rodriguez</h3>
                <p className="text-lg opacity-80 leading-relaxed">
                  Actualmente cursando mi carrera en Ingeniería en Sistemas
                  Computacionales con una pasión profunda por el desarrollo de
                  software y la resolución de problemas complejos.
                </p>
                <p className="opacity-70 leading-relaxed">
                  Mi enfoque se centra en crear aplicaciones web modernas,
                  algoritmos eficientes y sistemas escalables. Siempre en
                  búsqueda de las mejores prácticas y tecnologías emergentes
                  para construir soluciones innovadoras.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    ".NET",
                    "React",
                    "Node.js",
                    "SQL",
                    "Java",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-gray-500 to-gray-700 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Terminal className="w-20 h-20 mx-auto mb-4" />
                    <p className="text-xl font-semibold">
                      Desarrollador en Formación
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-400 to-white bg-clip-text text-transparent">
              Habilidades Técnicas
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Desarrollo Web</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Html, CSS, JavaScript, TypeScript, React
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Backend Web</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Node.js, Java (básico), .NET (básico)
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Base de Datos</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  SQL, PostgreSQL, MongoDB
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-700 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Programación</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Estructuras de datos, Algoritmos
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Sistemas</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Linux, Docker, Git, Arquitectura de Software
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Mobile</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  .NET Maui, Flutter
                </p>
              </div>
            </div>

            <div
              className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Globe2 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Idiomas</h3>
                <p
                  className={`${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Español (Nativo), Inglés Intermedio (TOEIC Bridge B1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              Proyectos Destacados
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Plataforma Web Corporativa – Tlatec",
                description:
                  "Desarrollo de una página web institucional enfocada en ofrecer información clara y accesible a clientes y colaboradores. El proyecto incluyó diseño, implementación de backend, base de datos, pasarela de pagos y despliegue en producción.",
                tech: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
                gradient: "from-gray-500 to-gray-700",
                url: "https://tlatec.teteocan.com/",
              },
              /*              {
                title: "Algoritmo de Optimización",
                description:
                  "Implementación de algoritmos genéticos para resolver problemas de optimización combinatoria.",
                tech: ["Python", "NumPy", "Matplotlib"],
                gradient: "from-gray-600 to-gray-800",
              },
              {
                title: "App de Comercio Electrónico",
                description:
                  "Plataforma de e-commerce con carrito de compras, pagos y gestión de inventario.",
                tech: ["TypeScript", "Express", "PostgreSQL"],
                gradient: "from-gray-700 to-gray-900",
              },
              {
                title: "Red Neuronal Clasificadora",
                description:
                  "Implementación de una red neuronal para clasificación de imágenes usando TensorFlow.",
                tech: ["Python", "TensorFlow", "OpenCV"],
                gradient: "from-gray-500 to-gray-700",
              },
              {
                title: "API REST Microservicios",
                description:
                  "Arquitectura de microservicios con Docker y comunicación entre servicios.",
                tech: ["Java", "Spring Boot", "Docker"],
                gradient: "from-gray-600 to-gray-800",
              },
              {
                title: "Dashboard Analytics",
                description:
                  "Panel de control en tiempo real para visualización de datos y métricas empresariales.",
                tech: ["React", "D3.js", "WebSocket"],
                gradient: "from-gray-700 to-gray-900",
         },*/
            ].map((project, index) => (
              <div
                key={index}
                className={`${cardClasses} rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden`}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden block`}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-8 h-8 text-white" />
                  </div>
                </a>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <p
                    className={`text-sm leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${contactBgClasses}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3
                  className={`text-2xl font-bold mb-4 ${
                    isDarkMode ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  ¡Hablemos!
                </h3>
                <p
                  className={`leading-relaxed ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Estoy siempre interesado en nuevas oportunidades, proyectos
                  colaborativos y conversaciones sobre tecnología. No dudes en
                  contactarme.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <Mail
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      Email
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      alanjrr.isc@gmailcom
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <Github
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      GitHub
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      github.com/AlanRanchs
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  >
                    <Linkedin
                      className={`w-6 h-6 ${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    />
                  </div>
                  <div>
                    <p
                      className={`font-semibold ${
                        isDarkMode ? "text-gray-100" : "text-gray-900"
                      }`}
                    >
                      LinkedIn
                    </p>
                    <p
                      className={`${
                        isDarkMode ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      linkedin.com/in/alanrdz10
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className={`${cardClasses} rounded-xl p-8 border shadow-lg`}>
              <form className="space-y-6">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-gray-500 text-gray-100"
                        : "bg-white border-gray-300 focus:border-gray-500 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-20 transition-colors`}
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-gray-500 text-gray-100"
                        : "bg-white border-gray-300 focus:border-gray-500 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-20 transition-colors`}
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    Mensaje
                  </label>
                  <textarea
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      isDarkMode
                        ? "bg-gray-700 border-gray-600 focus:border-gray-500 text-gray-100"
                        : "bg-white border-gray-300 focus:border-gray-500 text-gray-900"
                    } focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-20 transition-colors resize-none`}
                    placeholder="Tu mensaje..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-3 rounded-lg font-semibold hover:from-gray-700 hover:to-gray-900 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div> }*/}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-12 px-4 border-t ${
          isDarkMode
            ? "border-gray-700 bg-gray-900"
            : "border-gray-300 bg-white"
        }`}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
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

            <div className="space-y-4">
              <h4
                className={`font-semibold ${
                  isDarkMode ? "text-gray-200" : "text-gray-800"
                }`}
              >
                Navegación
              </h4>
              <div className="space-y-2 text-sm">
                {[
                  "Inicio",
                  "Acerca",
                  "Habilidades",
                  "Proyectos",
                  "Contacto",
                ].map((item, index) => (
                  <button
                    key={item}
                    onClick={() =>
                      scrollToSection(
                        ["home", "about", "skills", "projects", "contact"][
                          index
                        ]
                      )
                    }
                    className={`block hover:text-gray-600 transition-colors ${
                      isDarkMode
                        ? "text-gray-400 hover:text-gray-300"
                        : "text-gray-600 hover:text-gray-800"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

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
                <p>React • Node.js</p>
                <p>JavaScript • Java • SQL</p>
                <p>HTML • CSS • Linux • Git</p>
              </div>
            </div>
          </div>

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
    </div>
  );
}

export default App;
