import "./InputField.css";
import React from "react";
import addToDo from "../utils/storage";

export default function InputField() {
  return (
    <form
      onSubmit={(todo) => {
        todo.preventDefault();
        // hier später ersetzen durch bessere Form!
        addToDo(document.querySelector("#inputField").value);
        document.querySelector("#inputField").value = "";
      }}
    >
      <input
        className="inputField"
        type="text"
        placeholder="Insert ToDo"
        id="inputField"
        required="true"
      ></input>
      <button type="submit" className="inputButton">
        Remember!
      </button>
    </form>
  );
}
