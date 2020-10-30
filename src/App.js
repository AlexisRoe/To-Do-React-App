import "./app.css";
import React from "react";
import InputField from "./components/InputField";
import OutputFieldList from "./components/OutputFieldList";

function App() {
  const toDoList = JSON.parse(localStorage.getItem("todo")) || [];
  return (
    <main>
      <InputField />
      <OutputFieldList toDoList={toDoList} />
    </main>
  );
}

export default App;
