import React, { useState } from 'react'
import Category from './Category';
import LoggerRenderer from './LoggerRenderer';
import Searchbar from '../../shared/utility/Searchbar';

export default function Loggers({ views, model }) {
    const [text, setText] = useState('');
    const [filteredLoggers, setFilteredLoggers] = useState(model);

    function onTextChange(e) {
        const value = e.target.value;
        setText(value);
        const filtered = model.filter(obj => {
            const jsonString = JSON.stringify(obj);
            return jsonString.includes(value);
        }); 
        setFilteredLoggers(filtered);
    }

    return (
        <div className={views.style}>
            <Category {...{ views: views.category }} />
            <Searchbar {...{ text, setText, onTextChange }} />
            <LoggerRenderer {...{ views: views.renderer, loggers: filteredLoggers }} />
        </div>
    )
}
