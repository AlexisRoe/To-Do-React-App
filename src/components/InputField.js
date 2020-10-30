import "./InputField.css";
import React from "react";

export default function InputField() {
  return (
    <div>
      <input
        className="inputField"
        type="text"
        placeholder="Insert ToDo"
        id="inputField"
      ></input>
      <button type="submit" className="inputButton">
        Remember!
      </button>
    </div>
  );
}
