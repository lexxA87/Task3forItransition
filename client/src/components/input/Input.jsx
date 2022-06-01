import React from "react";

function Input(props) {
  return (
    <div className="form-floating mb-3">
      <input
        id={props.htmlId}
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
        type={props.type}
        placeholder={props.placeholder}
        className="form-control"
      />
      <label htmlFor={props.htmlId}>{props.placeholder}</label>
    </div>
  );
}

export default Input;
