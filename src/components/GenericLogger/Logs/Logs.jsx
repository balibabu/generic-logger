import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import LogRender from './LogRender';
import Category from '../Loggers/Category';
import Searchbar from '../../shared/utility/Searchbar';
import logSearch from './utility/logSearch';

export default function Logs({ views, models }) {
    const { id } = useParams();
    const logger = models.loggers.find((logger) => logger.id === id);
    const [filteredLogs, setFilteredLogs] = useState([]);
    const [text, setText] = useState('');
    const timerRef = useRef(null);


    useEffect(() => {
        setFilteredLogs(models.logs.filter((log) => log.loggerId === id));
    }, [id, models.logs])


    function searchOperation(keyText) {
        const _logs = models.logs.filter((log) => log.loggerId === id && logSearch(keyText, log, logger));
        setFilteredLogs([..._logs]);
    }

    function onTextChange(e) {
        const value = e.target.value;
        setText(value);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
            searchOperation(value);
        }, 500);
    }

    return (
        <div className={views.style}>
            <Category {...{ views: views.category }} />
            <Searchbar {...{ text, setText, onTextChange }} />
            <LogRender {...{ views: views.renderer, logs: filteredLogs, loggerId: id, logger }} />
        </div>
    )
}
