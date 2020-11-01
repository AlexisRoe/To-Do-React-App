import React from 'react';
import './Completed.css';

export default function Completed({ completedToDo }) {
    return (
        <div className='completedContainer'>
            <span>[X]</span>
            <span>##</span>
            <span className='completedItem'>{completedToDo}</span>
        </div>
    );
}
