import React from "react";
import type { ReactNode } from "react";
import cx from "classnames";
import "./Button.css";

type Props = { children: ReactNode; variant?: "primary" | "secondary" };

const Button = ({ children, variant = "primary" }: Props) => {
  return (
    <button type="button" className={cx("button", variant)}>
      {children}
    </button>
  );
};

export default Button;
