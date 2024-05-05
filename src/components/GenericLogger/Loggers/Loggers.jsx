import React, { useEffect, useState } from 'react'
import Category from './Category';
import LoggerRenderer from './LoggerRenderer';
import Searchbar from '../../shared/utility/Searchbar';

export default function Loggers({ views, model }) {
    const [text, setText] = useState('');
    const [filteredLoggers, setFilteredLoggers] = useState([]);

    useEffect(() => {
        setFilteredLoggers(model);
    }, [model]);

    function onTextChange(e) {
        const value = e.target.value;
        setText(value);
        setFilteredLoggers(model.filter((logger) => logger.title.toLowerCase().includes(value.toLowerCase())));
    }

    return (
        <div className={views.style}>
            <Category {...{ views: views.category }} />
            <Searchbar {...{ text, setText, onTextChange }} />
            <LoggerRenderer {...{ views: views.renderer, loggers: filteredLoggers }} />
        </div>
    )
}
