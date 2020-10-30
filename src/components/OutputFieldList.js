import React from "react";
import "./OutputFieldList.css";
import OutputField from "./OutputField";

export default function OutputFieldList({ toDoList }) {
  return (
    <div className="OutputFieldList">
      {toDoList.map((todo) => (
        <OutputField key={todo} todo={todo} />
      ))}
    </div>
  );
}
