import React from "react";

type Props = { label: string };

const Button = ({ label }: Props) => {
  return <button type="button">{label}</button>;
};

export default Button;