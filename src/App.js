import './app.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputFieldList from './components/OutputFieldList';
import addToDo from './utils/storage';
import getData from './utils/getData';

function App() {
    const defaultList = getData('todo');
    const [toDoList, setToDo] = useState(defaultList);
    const [buildSwitch, setBuildSwitch] = useState(null);

    function handleRemove(todo) {
        const newList = toDoList.filter((item) => item !== todo);
        setToDo(newList);
    }

    function inputAnalyse(inputValue) {
        setBuildSwitch(null);

        if (/^clear/.test(inputValue)) {
            setToDo([]);
        } else if (/^list todo/.test(inputValue)) {
            setToDo(getData('todo'));
        } else if (/^help/.test(inputValue)) {
            const help = [
                '$ add text           = add new to-do item with value=text',
                '$ list todo          = shows to-do list',
                '$ check #number      = check item with #number',
                '$ uncheck #number    = uncheck item with #number',
                '$ complete #number   = delete item with #number',
                '$ complete #number   = delete item with #number',
                '$ clear              = clear console',
            ];
            setBuildSwitch("help")
            setToDo(help);
        } else if (/^complete/.test(inputValue)) {
            alert("conplete detetected");
        } else {
            setToDo(addToDo(inputValue));
        }
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
            <div className='bodyContainer'>
                <header className='header'>
                    ******************************************************
                    <br />
                    *** JUST ANOTHER STUPID TO-DO-APP *** <br />
                    type help for more information
                    <br />
                    ******************************************************
                </header>
                <InputField
                    onSubmit={(event) => {
                        event.preventDefault();
                        inputAnalyse(event.target.input.value);
                        event.target.input.value = '';
                    }}
                />
                {toDoList && (
                    <OutputFieldList itemList={toDoList} onRemove={handleRemove} router={buildSwitch} />
                )}
            </div>
        </main>
    );
}

export default App;
