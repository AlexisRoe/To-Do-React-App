import React from 'react';
import './Editor.css';

export default function Editor({ todo, onSubmit }) {
    const [ value, index ] = todo;
    return (
        <article className='editor'>
            <nav className='windowBar'>
                <span>Editor</span>
                <button
                    className='btn-X'
                    onClick={() => {
                        document.documentElement.style.setProperty('--editor', 'none');
                    }}
                >
                    X
                </button>
            </nav>
            <p>old: $ {value}</p>
            <form className='editorForm' onSubmit={(event) => onSubmit(event, index)}>
                <span>new: $</span>
                <input type='text' name='editor' id='editor' autoComplete='off' autoFocus={true}/>
            </form>
        </article>
    );
}
