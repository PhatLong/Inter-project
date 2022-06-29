import React from "react";

type InputProps = {
  name?: string;
  id?: string;
  Type: any;
  value: string;
  label: string;
};

const Profile_Input = (props: InputProps) => {
  return (
    <div className="info-item">
      <label>{props.label}</label>
      <input
        type={props.Type}
        autoComplete="off"
        name={props.name}
        id={props.id}
        value={props.value}
        disabled
      />
    </div>
  );
};

export default Profile_Input;
