import "./InputField.css";
import React from "react";

export default function InputField(props) {
  return (
    <form {...props}>
      <input
        className="inputField"
        type="text"
        placeholder="Insert ToDo"
        id="inputField"
        required={true}
      ></input>
      <button type="submit" className="inputButton">
        Remember!
      </button>
    </form>
  );
}
