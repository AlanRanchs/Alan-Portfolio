import React from "react";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  gradient: string;
  url: string;
}

interface ProjectsProps {
  cardClasses: string;
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ cardClasses, isDarkMode }) => {
  const projects: Project[] = [
    {
      title: "Plataforma Web Corporativa – Tlatec",
      description:
        "Desarrollo de una página web institucional enfocada en ofrecer información clara y accesible a clientes y colaboradores. El proyecto incluyó diseño, implementación de backend, base de datos, pasarela de pagos y despliegue en producción.",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "PostgreSQL"],
      gradient: "from-gray-500 to-gray-700",
      url: "https://tlatec.teteocan.com/",
    },
    // Proyectos comentados para futuras adiciones
    /*{
      title: "Algoritmo de Optimización",
      description:
        "Implementación de algoritmos genéticos para resolver problemas de optimización combinatoria.",
      tech: ["Python", "NumPy", "Matplotlib"],
      gradient: "from-gray-600 to-gray-800",
      url: "#",
    },
    {
      title: "App de Comercio Electrónico",
      description:
        "Plataforma de e-commerce con carrito de compras, pagos y gestión de inventario.",
      tech: ["TypeScript", "Express", "PostgreSQL"],
      gradient: "from-gray-700 to-gray-900",
      url: "#",
    },*/
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">
          <span className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent">
            Proyectos Destacados
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
  );
};

export default Projects;
