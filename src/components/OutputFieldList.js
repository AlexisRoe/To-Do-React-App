import React from 'react';
import './OutputFieldList.css';
import OutputField from './OutputField';
import Help from './Help';

export default function OutputFieldList({ itemList, onRemove, router }) {
    function output() {
        if (router === 'help') {
            const helpList = itemList.map((item) => <Help key={item} helpValue={item} />);
            return helpList;
        } else {
            const regularList = itemList.map((item, index) => (
                <OutputField key={item} todo={item} onRemove={onRemove} index={index} />
            ));
            return regularList;
        }
    }

    return <div className='OutputFieldList'>{output()}</div>;
}
