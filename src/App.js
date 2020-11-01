import './app.css';
import React, { useState } from 'react';
import InputField from './components/InputField';
import OutputFieldList from './components/OutputFieldList';
import Editor from './components/Editor';

import addToDo from './utils/storage';
import getData from './utils/getData';
import addCheck from './utils/addCheck';
import deleteCheck from './utils/deleteCheck';
import removeFromStorage from './utils/remove';
import makeDate from "./utils/makeDate";

function App() {
    const defaultList = getData('todo');
    const [itemList, setItemList] = useState(defaultList);
    const [buildSwitch, setBuildSwitch] = useState(null);
    const [editValue, setEditValue] = useState(null);
    const [stateLabel, setStateLabel] = useState(null);

    function handleRemove(todo) {
        const newList = itemList.filter((item) => item !== todo);
        setItemList(newList);
    }

    function editToDo(newToDo) {
        const [value, index] = newToDo;
        document.documentElement.style.setProperty('--editor', 'none');
        const updatedList = [...itemList];
        updatedList[index] = `${value}≠${makeDate()}`;
        localStorage.setItem('todo', JSON.stringify(updatedList));
        setItemList(updatedList);
        setEditValue(null);
    }

    function inputAnalyse(inputValue) {
        setBuildSwitch(null);

        if (/^clear/i.test(inputValue)) {
            setItemList([]);
        } else if (/^list completed/i.test(inputValue) || /^list deleted/i.test(inputValue)) {
            const completedList = getData('deleted');
            setBuildSwitch('completed');
            setItemList(completedList);
        } else if (/^list/i.test(inputValue)) {
            setItemList(getData('todo'));
        } else if (/^help/i.test(inputValue)) {
            const help = [
                '$ text              = add new to-do item with value=text',
                '$ list              = shows to-do list',
                '$ list completed    = shows all completed to-do´s',
                '$ filter checked    = shows only checked to-do',
                '$ filter unchecked  = shows only unchecked to-do',
                '$ edit number text  = edit existing to-do with text',
                '$ check number      = check item with #number',
                '$ uncheck number    = uncheck item with #number',
                '$ delete number     = delete item with #number',
                '$ delete all        = delete all items',
                '$ clear             = clear console',
            ];
            setBuildSwitch('help');
            setItemList(help);
        } else if (/^delete all/i.test(inputValue)) {
            itemList.forEach((item) => {
                removeFromStorage(item);
            })
            setItemList([]);
        } else if (/^delete/i.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                removeFromStorage(itemList[index]);
                handleRemove(itemList[index]);
            }
        } else if (/^edit/i.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                document.documentElement.style.setProperty('--editor', 'block');
                const editText = itemList[index].split("≠")[0];
                setEditValue([editText, index]);
            }
        } else if (/^check/i.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                addCheck(itemList[index]);
                setStateLabel(index);
            }
        } else if (/^uncheck/.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                deleteCheck(itemList[index]);
                setStateLabel(index+1);
            }
        } else if (/^filter checked/i.test(inputValue)) {
            setItemList(getData('checked'));
        } else if (/^filter unchecked/i.test(inputValue)) {
            const checkedList = getData('checked');
            const allToDoList = getData('todo');
            const output = allToDoList.filter((todo) => !checkedList.includes(todo));
            setItemList(output);
        } else if (/^tell me a joke/i.test(inputValue)) {
            const joke = [
                '"A cement mixer has ­collided with a prison van. Motorists are asked to look out for 16 hardened criminals."',
            ];
            setItemList(joke);
            setBuildSwitch('joke');
        } else {
            setItemList(addToDo(inputValue));
        }
    }

    return (
        <div className='container'>
            {editValue && (
                <Editor
                    todo={editValue}
                    onSubmit={(event, index) => {
                        event.preventDefault();
                        editToDo([event.target.editor.value,index]);
                    }}
                />
            )}

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
                        JUST ANOTHER STUPID TO-DO-APP
                        <br />
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
                        <OutputFieldList
                            itemList={itemList}
                            router={buildSwitch}
                            stateLabel={stateLabel}
                        />
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
