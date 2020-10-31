import React from "react";
import "./OutputFieldList.css";
import OutputField from "./OutputField";

export default function OutputFieldList({ toDoList, onRemove }) {
  // document.querySelector("#inputField").value = "";
  return (
    <div className="OutputFieldList">
      {toDoList.map((todo) => (
        <OutputField key={todo} todo={todo} onRemove={onRemove}/>
      ))}
    </div>
  );
}
