import React, { useState, useEffect } from 'react';
import './OutputField.css';
import isChecked from '../utils/isChecked';

export default function OutputField({ todo, index, stateLabel }) {
    const [label, setLabel] = useState(isChecked(todo));

    const textValue = todo.split("≠");

    useEffect(() => {
        setLabel(isChecked(todo));
    }, [stateLabel]);

    return (
        <div className='outputContainer'>
            <label>{label}</label>
            <span className='outputIndex'>[{index + 1}]</span>
            <span className='output'>{textValue[0]}</span>
            <span>{textValue[1]}</span>
        </div>
    );
}
