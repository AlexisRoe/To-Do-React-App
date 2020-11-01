import React, { useState } from 'react';
import './OutputField.css';
import changeStatus from '../utils/checked';
import isChecked from '../utils/isChecked';

export default function OutputField({ todo, index}) {
    const [label, setLabel] = useState(isChecked(todo));

    return (
        <div className='outputContainer'>
            <input type='checkbox' name='nameToDo' />
            <label
                htmlFor='nameToDo'
                onClick={() => {
                    changeStatus(todo);
                    setLabel(isChecked(todo));
                }}
            >
                {label}
            </label>
            <span className="outputIndex">#{index + 1}</span>
            <span className="output">{todo}</span>
        </div>
    );
}
