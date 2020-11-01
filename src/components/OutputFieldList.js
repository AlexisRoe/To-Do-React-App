import React from 'react';
import './OutputFieldList.css';
import OutputField from './OutputField';
import Help from './Help';
import Completed from './Completed';

export default function OutputFieldList({ itemList, router, stateLabel }) {
    function output() {
        if (router === 'help') {
            const helpList = itemList.map((item) => <Help key={item} helpValue={item} />);
            return helpList;
        } else if (router === 'joke') {
            const helpList = itemList.map((item) => <Help key={item} helpValue={item} />);
            return helpList;
        } else if (router === 'completed') {
            const completedList = itemList.map((item, index) => (
                <Completed key={item} completedToDo={item} index={index} />
            ));
            return completedList;
        } else {
            const regularList = itemList.map((item, index) => (
                <OutputField key={item} todo={item} index={index} stateLabel={stateLabel} />
            ));
            return regularList;
        }
    }

    return <section className='OutputFieldList'>{output()}</section>;
}
