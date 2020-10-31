import React, { useState } from 'react';
import './OutputField.css';
import checkedInStorage from '../utils/checked';
import isChecked from '../utils/isChecked';
import removeStorage from '../utils/remove';

export default function OutputField({ todo, onRemove }) {
    const labelStart = () => (isChecked(todo) ? '[X]' : '[ ]');
    const [label, setLabel] = useState(labelStart);

    return (
        <div className='outputContainer'>
            <input type='checkbox' name='nameToDo' defaultChecked={isChecked(todo)} />
            <label
                htmlFor='nameToDo'
                onClick={() => {
                    checkedInStorage(todo);
                    setLabel(isChecked(todo) ? '[X]' : '[ ]');
                }}
            >
                {label}
            </label>
            <span>{todo}</span>
            <button
                onClick={() => {
                    removeStorage(todo);
                    onRemove(todo);
                }}
            >
                Completed
            </button>
        </div>
    );
}
