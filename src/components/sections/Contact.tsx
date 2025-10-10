import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import ContactForm from "../ui/ContactForm";

interface ContactProps {
  contactBgClasses: string;
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ contactBgClasses, isDarkMode }) => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alanjrr.isc@gmailcom",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/AlanRanchs",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/alanrdz10",
    },
  ];

  return (
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
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <div key={index} className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-200"
                      }`}
                    >
                      <Icon
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
                        {contact.title}
                      </p>
                      <p
                        className={`${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {contact.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Formulario de contacto */}
          <div>
            <ContactForm isDarkMode={isDarkMode} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
