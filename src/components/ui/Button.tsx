import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  target?: string;
  rel?: string;
  isDarkMode?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href,
  target,
  rel,
  isDarkMode = false,
}) => {
  if (href) {
    return (
      <StyledWrapper isDarkMode={isDarkMode}>
        <a href={href} target={target} rel={rel}>
          <button>
            <span className="button_top">{children}</span>
          </button>
        </a>
      </StyledWrapper>
    );
  }

  return (
    <StyledWrapper isDarkMode={isDarkMode}>
      <button onClick={onClick}>
        <span className="button_top">{children}</span>
      </button>
    </StyledWrapper>
  );
};

interface StyledWrapperProps {
  isDarkMode: boolean;
}

const StyledWrapper = styled.div<StyledWrapperProps>`
  display: inline-block;

  a {
    text-decoration: none;
  }

  button {
    /* Variables adaptables al tema */
    --button_radius: 5px;
    --button_color: ${(props) => (props.isDarkMode ? "#374151" : "#fff")};
    --button_outline_color: ${(props) =>
      props.isDarkMode ? "#4b5563" : "#323232"};
    --font-color: ${(props) => (props.isDarkMode ? "#e5e7eb" : "#323232")};
    --shadow-color: ${(props) => (props.isDarkMode ? "#1f2937" : "#000000")};

    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    padding: 0;
    background: transparent;
    position: relative;
  }

  .button_top {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: 3px solid var(--button_outline_color);
    border-radius: var(--button_radius);
    padding: 0.75em 2em;
    background: var(--button_color);
    color: var(--font-color);
    box-shadow: 0 6px 0 var(--shadow-color);
    transform: translateY(-4px);
    transition: all 0.1s ease;
    position: relative;
    overflow: hidden;
  }

  .button_top::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  button:hover .button_top {
    transform: translateY(-6px);
    box-shadow: 0 8px 0 var(--shadow-color);
  }

  button:hover .button_top::before {
    left: 100%;
  }

  button:active .button_top {
    transform: translateY(0);
    box-shadow: 0 2px 0 var(--shadow-color);
  }

  button:focus {
    outline: none;
  }

  button:focus .button_top {
    outline: 2px solid var(--button_outline_color);
    outline-offset: 4px;
  }
`;

export default Button;
