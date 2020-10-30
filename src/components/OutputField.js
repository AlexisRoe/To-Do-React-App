import React from "react";
import "./OutputField.css";
import checkedToDo from "../utils/checked";

export default function OutputField({ todo }) {
  return (
    <div>
      <input
        type="checkbox"
        name="nameToDo"
        onClick={() => {
          checkedToDo(todo);
        }}
      />
      <label htmlFor="nameToDo">{todo}</label>
    </div>
  );
}
