import React from "react";
import { Terminal } from "lucide-react";

interface AboutProps {
  cardClasses: string;
}

const About: React.FC<AboutProps> = ({ cardClasses }) => {
  return (
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
                algoritmos eficientes y sistemas escalables. Siempre en búsqueda
                de las mejores prácticas y tecnologías emergentes para construir
                soluciones innovadoras.
              </p>

              <div className="flex flex-wrap gap-2">
                {["JavaScript", ".NET", "React", "Node.js", "SQL", "Java"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  )
                )}
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
  );
};

export default About;
