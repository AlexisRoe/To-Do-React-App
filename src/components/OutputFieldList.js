import React from 'react';
import './OutputFieldList.css';
import OutputField from './OutputField';
import Help from './Help';
import Completed from "./Completed";

export default function OutputFieldList({ itemList, onRemove, router, label, onClick}) {
    function output() {
        if (router === 'help') {
            const helpList = itemList.map((item) => <Help key={item} helpValue={item} />);
            return helpList;
        } else if (router === "complete") {
            const completedList = itemList.map((item) => <Completed key={item} completedToDo={item}/>);
            return completedList;
        } else {
            const regularList = itemList.map((item, index) => (
                <OutputField key={item} todo={item} onRemove={onRemove} index={index} label={label} onClick={onClick}/>
            ));
            return regularList;
        }
    }

    return <div className='OutputFieldList'>{output()}</div>;
}
