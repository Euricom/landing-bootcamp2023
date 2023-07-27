import React from "react";
import styles from "./button.module.scss";

type ButtonVariant = "green" | "blue" | "white";

interface ButtonProps {
  variant: ButtonVariant;
  type?: "submit";
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}
function Button({ variant, children, type, onClick }: ButtonProps) {
  const className = styles[`inline-${variant}`];
  return (
    <button type={type} className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
