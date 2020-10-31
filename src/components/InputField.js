import "./InputField.css";
import React from "react";

export default function InputField(props) {
  return (
    <form className="inputContainer" {...props}>
      <span>$ ..&gt;  </span><input
        className="inputField"
        type="text"
        value=""
        id="inputField"
        autoComplete="off"
        autoFocus={true}
        required={true}
      ></input>
      <button type="submit" className="inputButton">
        Remember!
      </button>
    </form>
  );
}
