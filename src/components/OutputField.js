import React from "react";
import "./OutputField.css";
import checkedToDo from "../utils/checked";
import isChecked from "../utils/isChecked";
import removeToDo from "../utils/remove";

export default function OutputField({ todo, onRemove }) {
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
      <button onClick={() =>  {
        removeToDo(todo);
        onRemove(todo)}}>remove</button>
    </div>
  );
}