import React from "react";

type InputProps = {
  name?: string;
  id?: string;
  Type: any;
  Placeholer?: string;
};

const Input = (props: InputProps) => {
  const { Placeholer = "" } = props;
  return (
    <input
      className="input"
      placeholder={Placeholer}
      type={props.Type}
      required
      autoComplete="off"
      name={props.name}
      id={props.id}
    />
  );
};

export default Input;
