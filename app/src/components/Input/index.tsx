import React from "react";

// import PropTypes from "prop-types";

// type InputProps = {
//   id: string;
//   label: string;
//   type: "password" | "email" | "text" | "search";
//   value: string | boolean;
//   name: string;
// };

export interface InputPropsInterface {
  id: string;
  label?: string;
  type: "password" | "email" | "text" | "search";
  value: string | number;
  name: string;
  placeholder: string;
  onChange: (event: React.SyntheticEvent) => void;
}

export function Input({
  id,
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
}: InputPropsInterface) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
}

// Input.propTypes = {
//   id: PropTypes.string,
//   label: PropTypes.string.isRequired,
// };
