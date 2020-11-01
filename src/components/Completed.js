import React from 'react';
import './Completed.css';

export default function Completed({ completedToDo, index }) {

    const todo = completedToDo.split("?");

    return (
        <div className='completedContainer'>
            <span>[X]</span>
            <span>[{index +1}]</span>
            <span className='completedItem'>{todo[0]}</span>
            <span>Completed</span>
        </div>
    );
}
