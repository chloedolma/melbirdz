import { Input } from "../";
import type { InputPropsInterface } from "../";
import React from "react";

export function InputSearch({
  id = "searchBar",
  type = "search",
  name = "searchBar",
  value = "",
  placeholder = "Search for a bird...",
  onChange = () => {},
}: Partial<InputPropsInterface>) {
  return (
    <Input
      id={id}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

// import { Typeahead } from "react-bootstrap-typeahead";

// interface IInputSearchProps {
//   onChange: (value: string) => void;

//   options: Array<string>;
// }

// export function InputSearch({ options, onChange }: IInputSearchProps) {
//   // @ts-expect-error
//   return <Typeahead defaultSelected="" onChange={onChange} options={options} />;
// }
