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

function App() {
    const defaultList = getData('todo');
    const [itemList, setItemList] = useState(defaultList);
    const [buildSwitch, setBuildSwitch] = useState(null);
    const [editValue, setEditValue] = useState(null);

    function handleRemove(todo) {
        const newList = itemList.filter((item) => item !== todo);
        setItemList(newList);
    }

    function editToDo(newToDo) {
        const [value, index] = newToDo;
        document.documentElement.style.setProperty('--editor', 'none');
        const updatedList = [...itemList];
        updatedList[index] = value;
        localStorage.setItem('todo', JSON.stringify(updatedList));
        setItemList(updatedList);
        setEditValue(null);
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
            const completedList = getData('deleted');
            setBuildSwitch('complete');
            setItemList(completedList);
        } else if (/^help/.test(inputValue)) {
            const help = [
                '$ text              = add new to-do item with value=text',
                '$ list / list todo  = shows to-do list',
                '$ list complete     = shows all completed to-do´s',
                '$ filter checked    = shows only checked to-do',
                '$ filter unchecked  = shows only unchecked to-do',
                '$ edit number text  = edit existing to-do with text',
                '$ check number      = check item with #number',
                '$ uncheck number    = uncheck item with #number',
                '$ complete number   = delete item with #number',
                '$ clear             = clear console',
            ];
            setBuildSwitch('help');
            setItemList(help);
        } else if (/^complete/.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                removeFromStorage(itemList[index]);
                handleRemove(itemList[index]);
            }
        } else if (/^edit/.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                document.documentElement.style.setProperty('--editor', 'block');
                setEditValue([itemList[index], index]);
            }
        } else if (/^check/.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                addCheck(itemList[index]);
            }
        } else if (/^uncheck/.test(inputValue)) {
            const index = inputValue.match(/\d+/) - 1;
            if (index >= 0 && index < itemList.length) {
                deleteCheck(itemList[index]);
            }
        } else if (/^filter checked/.test(inputValue)) {
            setItemList(getData('checked'));
        } else if (/^filter unchecked/.test(inputValue)) {
            const checkedList = getData('checked');
            const allToDoList = getData('todo');
            const output = allToDoList.filter((todo) => !checkedList.includes(todo));
            setItemList(output);
        } else if (/^tell me a joke/.test(inputValue)) {
            const joke = [
                'A cement mixer has ­collided with a prison van. Motorists are asked to look out for 16 hardened criminals.',
            ];
            setItemList(joke);
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
                            onRemove={handleRemove}
                            router={buildSwitch}
                        />
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
