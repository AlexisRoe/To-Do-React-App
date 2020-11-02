import "./InputField.css";
import React from "react";

export default function InputField(props) {
  return (
    <form className="inputContainer" {...props}>
      <span>$ ./ &gt;  </span>
      <input
        name="input"
        className="inputField"
        type="text"
        id="inputField"
        autoComplete="off"
        autoFocus={true}
        required={true}
      ></input>
    </form>
  );
}
