import React from "react";
import type { ReactNode } from "react";
import "./Button.css";

type Props = { children: ReactNode; variant?: "primary" | "secondary" };

const Button = ({ children, variant = "primary" }: Props) => {
  return (
    <button type="button" className={`${variant}`}>
      {children}
    </button>
  );
};

export default Button;
