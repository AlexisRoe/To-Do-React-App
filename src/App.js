import './app.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputFieldList from './components/OutputFieldList';
import addToDo from './utils/storage';
import getData from './utils/getData';

function App() {
    const defaultList = getData("todo");
    const [toDoList, setToDo] = useState(defaultList);

    function handleRemove(todo) {
        const newList = toDoList.filter((item) => item !== todo);
        setToDo(newList);
    }

    return (
        <main className='main'>
            <div className='windowBar'>
                <span>Just another stupid To-Do-App</span>
                <div className='btn-container'>
                    <button className='btn-min'>_</button>
                    <button className='btn-max'>☐</button>
                    <button className='btn-X'>X</button>
                </div>
            </div>
            <div className="bodyContainer">
                <header className='header'>
                    ******************************************************<br />
                    JUST ANOTHER STUPID TO-DO-APP <br />
                    2020-10-31 <br />
                    ******************************************************
                </header>
                <InputField
                    onSubmit={(event) => {
                        event.preventDefault();
                        setToDo(addToDo(event.target.input.value));
                        event.target.input.value = '';
                    }}
                />
                {toDoList && <OutputFieldList toDoList={toDoList} onRemove={handleRemove} />}
            </div>
        </main>
    );
}

export default App;
