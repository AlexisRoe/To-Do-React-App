import React from "react";
import "./OutputField.css";
import checkedToDo from "../utils/checked";
import isChecked from "../utils/isChecked";

export default function OutputField({ todo }) {
  return (
    <div>
      <input
        type="checkbox"
        name="nameToDo"
        defaultChecked={isChecked(todo)}
        onClick={() => {
          checkedToDo(todo);
        }}
      />
      <label htmlFor="nameToDo">{todo}</label>
    </div>
  );
}
