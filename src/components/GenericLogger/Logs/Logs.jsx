import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VariableContext from '../../context/VariableContext';
import LogRender from './LogRender';

export default function Logs() {
    const { id } = useParams();
    const { loggers, logs } = useContext(VariableContext);
    const [logger, setLogger] = useState();

    useEffect(() => {
        setLogger(loggers[id]); // needs changing id <-> index
    }, [])

    return (
        <div>
            <LogRender {...{logs}} />
            
        </div>
    )
}
