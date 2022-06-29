import React, { useState } from "react";
import { BsEyeSlash } from "react-icons/bs";

type InputProps = {
  name?: string;
  Placeholer?: string;
};

const Input_Pass = (props: InputProps) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const { Placeholer = "" } = props;
  return (
    <div className="passWrap">
      <input
        className="input"
        placeholder={Placeholer}
        type={passwordShown ? "text" : "password"}
        name={props.name}
        id="password"
      />
      <BsEyeSlash className="icon" onClick={togglePassword} />
    </div>
  );
};

export default Input_Pass;
