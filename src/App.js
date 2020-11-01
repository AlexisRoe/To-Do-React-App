import './app.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputFieldList from './components/OutputFieldList';

import addToDo from './utils/storage';
import getData from './utils/getData';
import removeFromStorage from "./utils/remove";

function App() {
    const defaultList = getData('todo');
    const [itemList, setItemList] = useState(defaultList);
    const [buildSwitch, setBuildSwitch] = useState(null);

    function handleRemove(todo) {
        const newList = itemList.filter((item) => item !== todo);
        setItemList(newList);
    }

    function inputAnalyse(inputValue) {
        setBuildSwitch(null);

        if (/^clear/.test(inputValue)) {
            setItemList([]);
        } else if (/^list todo/.test(inputValue)) {
            setItemList(getData('todo'));
        } else if (/^list/.test(inputValue)) {
            setItemList(getData('todo'));
        } else if (/^list complete/.test(inputValue)) {
            const completedList = getData("deleted")
            setBuildSwitch("complete");
            setItemList(completedList);
        } else if (/^help/.test(inputValue)) {
            const help = [
                '$ text              = add new to-do item with value=text',
                '$ list todo         = shows to-do list',
                '$ list complete     = shows all completed to-do´s',
                '$ filter checked    = shows only checked to-do',
                '$ filter unchecked  = shows only unchecked to-do',
                '$ check number      = check item with #number',
                '$ uncheck number    = uncheck item with #number',
                '$ complete number   = delete item with #number',
                '$ clear             = clear console',
            ];
            setBuildSwitch("help");
            setItemList(help);
        } else if (/^complete/.test(inputValue)) {
            const index = inputValue.match(/\d+/) -1;
            if (index >= 0 && index < itemList.length){
                removeFromStorage(itemList[index]);
                handleRemove(itemList[index]);
            }
        } else if (/^filter checked/.test(inputValue)) {
            setItemList(getData('checked'));
        } else if (/^filter unchecked/.test(inputValue)) {
            const checkedList = getData('checked');
            const allToDoList = getData("todo");
            const output = allToDoList.filter((todo) => !checkedList.includes(todo))
            setItemList(output);
        } else {
            setItemList(addToDo(inputValue));
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
                    JUST ANOTHER STUPID TO-DO-APP<br />
                    2020-10-31
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
                {itemList && (
                    <OutputFieldList itemList={itemList} onRemove={handleRemove} router={buildSwitch} />
                )}
            </div>
        </main>
    );
}

export default App;
