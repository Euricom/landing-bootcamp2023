import React from "react";
import styles from "./button.module.scss";

type ButtonVariant = "green" | "blue" | "white";

interface ButtonProps {
  variant: ButtonVariant;
  fullWidth?: boolean;
  children: React.ReactNode;
}
function Button({ variant, children, fullWidth }: ButtonProps) {
  const className = fullWidth ? styles[variant] : styles[`inline-${variant}`];
  return <div className={className}>{children}</div>;
}

export default Button;
