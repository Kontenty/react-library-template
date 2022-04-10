import React from "react";
import type { ReactNode } from "react";
import clsn from "classnames";
import css from "./Button.module.css";

type Props = { children: ReactNode; variant?: "primary" | "secondary" };

const Button = ({ children, variant = "primary" }: Props) => {
  return (
    <button type="button" className={clsn(css.button, css[variant])}>
      {children}
    </button>
  );
};

export default Button;
