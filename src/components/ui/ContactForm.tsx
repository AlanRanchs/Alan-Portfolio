import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface ContactFormProps {
  isDarkMode: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  // Auto-ocultar el mensaje después de 5 segundos
  useEffect(() => {
    if (submitMessage) {
      const timer = setTimeout(() => {
        setSubmitMessage("");
      }, 5000); // 5 segundos

      return () => clearTimeout(timer);
    }
  }, [submitMessage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "07a928c9-4c29-41a9-8bb4-59f8a605fae2",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: "Portfolio Contact Form",
          subject: `Nuevo mensaje de ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage("¡Mensaje enviado con éxito!");
        setIsSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitMessage("Error al enviar el mensaje. Intenta de nuevo.");
        setIsSuccess(false);
      }
    } catch (error) {
      setSubmitMessage("Error al enviar el mensaje. Intenta de nuevo.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <StyledWrapper isDarkMode={isDarkMode}>
      <form className="form" onSubmit={handleSubmit}>
        <p>
          Contáctame<span>Completa el formulario para enviarme un mensaje</span>
        </p>

        <input
          type="text"
          placeholder="Nombre"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          placeholder="Mensaje"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button className="submitButton" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
          <svg
            className="icon"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m6 17 5-5-5-5" />
            <path d="m13 17 5-5-5-5" />
          </svg>
        </button>

        {submitMessage && (
          <div className={`messageBox ${isSuccess ? "success" : "error"}`}>
            {submitMessage}
          </div>
        )}
      </form>
    </StyledWrapper>
  );
};

interface StyledWrapperProps {
  isDarkMode: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  .form {
    --background: ${(props) => (props.isDarkMode ? "#1f2937" : "#d3d3d3")};
    --input-focus: #2d8cf0;
    --font-color: ${(props) => (props.isDarkMode ? "#e5e7eb" : "#323232")};
    --font-color-sub: ${(props) => (props.isDarkMode ? "#9ca3af" : "#666")};
    --bg-color: ${(props) => (props.isDarkMode ? "#374151" : "#fff")};
    --main-color: ${(props) => (props.isDarkMode ? "#4b5563" : "#323232")};
    padding: 20px;
    background: var(--background);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    width: 100%;
  }

  .form > p {
    color: var(--font-color);
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
  }

  .form > p > span {
    color: var(--font-color-sub);
    font-weight: 600;
    font-size: 17px;
    margin-top: 5px;
  }

  .submitButton {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 16px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
    transition: all 250ms;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .submitButton:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .submitButton::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background-color: #212121;
    z-index: -1;
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  .submitButton:hover:not(:disabled) {
    color: #e8e8e8;
  }

  .submitButton:hover:not(:disabled)::before {
    width: 100%;
  }

  .form > input,
  .form > textarea {
    width: 100%;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 10px;
    outline: none;
    resize: vertical;
    min-height: 40px;
  }

  .form > input::placeholder,
  .form > textarea::placeholder {
    color: var(--font-color-sub);
  }

  .form > textarea {
    min-height: 100px;
    font-family: inherit;
  }

  .icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .messageBox {
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
    text-align: center;
    font-weight: 600;
    font-size: 15px;
    animation: slideIn 0.3s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .messageBox.success {
    background-color: #10b981;
    color: white;
    border-color: #059669;
  }

  .messageBox.error {
    background-color: #ef4444;
    color: white;
    border-color: #dc2626;
  }
`;

export default ContactForm;
