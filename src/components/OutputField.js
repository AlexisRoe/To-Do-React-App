import React, { useState } from 'react';
import './OutputField.css';
import checkedInStorage from '../utils/checked';
import isChecked from '../utils/isChecked';
import removeStorage from '../utils/remove';

export default function OutputField({ todo, onRemove }) {
    const [label, setLabel] = useState(isChecked(todo));

    return (
        <div className='outputContainer'>
            <input type='checkbox' name='nameToDo'/>
            <label
                htmlFor='nameToDo'
                onClick={() => {
                    checkedInStorage(todo);
                    setLabel(isChecked(todo));
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
