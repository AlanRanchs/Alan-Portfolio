import React from "react";
import {
  Globe,
  Server,
  Database,
  Code,
  Cpu,
  Smartphone,
  Globe2,
} from "lucide-react";

interface SkillsProps {
  cardClasses: string;
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ cardClasses, isDarkMode }) => {
  const skills = [
    {
      icon: Globe,
      title: "Desarrollo Web",
      description: "Html, CSS, JavaScript, TypeScript, React",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: Server,
      title: "Backend Web",
      description: "Node.js, Java (básico), .NET (básico)",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Database,
      title: "Base de Datos",
      description: "SQL, PostgreSQL, MongoDB",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Code,
      title: "Programación",
      description: "Estructuras de datos, Algoritmos",
      gradient: "from-gray-500 to-gray-700",
    },
    {
      icon: Cpu,
      title: "Sistemas",
      description: "Linux, Docker, Git, Arquitectura de Software",
      gradient: "from-gray-600 to-gray-800",
    },
    {
      icon: Smartphone,
      title: "Mobile",
      description: ".NET Maui, Flutter",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Globe2,
      title: "Idiomas",
      description: "Español (Nativo), Inglés Intermedio (TOEIC Bridge B1)",
      gradient: "from-gray-700 to-gray-900",
    },
  ];

  return (
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
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className={`${cardClasses} rounded-xl p-6 border shadow-lg hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="text-center space-y-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${skill.gradient} rounded-xl mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{skill.title}</h3>
                  <p
                    className={`${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
