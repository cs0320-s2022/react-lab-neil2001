import React from "react";
// import "./App.css";

interface TextBoxInput {
  label: string;
  change: React.Dispatch<string>;
}

function TextBox(props: TextBoxInput) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.change(event.target.value);
  };
  return (
    <div>
      <label htmlFor={props.label}>{props.label}</label>
      <input type="text" onChange={handleChange} />
    </div>
  );
}

export default TextBox;
