import { Input } from "../";
import type { InputPropsInterface } from "../";
import React from "react";

export function InputEmail({
  id = "email",
  label = "Email",
  type = "email",
  name = "email",
  value = "",
  placeholder = "",
  onChange = () => {},
}: Partial<InputPropsInterface>) {
  return (
    <Input
      id={id}
      label={label}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

// Pure Function + immutability (filter, map, reduce, includes)
// const sum = (a, b) => a + b
// sum(1, 1) => 2
