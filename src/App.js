import './app.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputFieldList from './components/OutputFieldList';
import addToDo from './utils/storage';

function App() {
    const defaultList = JSON.parse(localStorage.getItem("todo")) || ["Nix zu tun"];

    const [toDoList, setToDo] = useState(defaultList);

    return (
        <main>
            <InputField
                onSubmit={(event) => {
                    event.preventDefault();
                    // hier später ersetzen durch bessere Form!
                    let inputValue = document.querySelector('#inputField').value;
                    const newList = addToDo(inputValue);
                    inputValue = '';
                    setToDo(newList);
                }}
            />
            {toDoList && 
            <OutputFieldList toDoList={toDoList} />}
        </main>
    );
}

export default App;
