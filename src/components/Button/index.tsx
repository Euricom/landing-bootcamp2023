import React from "react";
import styles from "./button.module.scss";

type ButtonVariant = "green" | "blue" | "white";

interface ButtonProps {
  variant: ButtonVariant;
  type?: "submit";
  fullWidth?: boolean;
  children: React.ReactNode;
}
function Button({ variant, children, type }: ButtonProps) {
  const className = styles[`inline-${variant}`];
  return (
    <button type={type} className={className}>
      {children}
    </button>
  );
}

export default Button;
