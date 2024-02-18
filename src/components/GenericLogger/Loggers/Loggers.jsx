import React, { useContext, useState } from 'react'
import Category from './Category';
import LoggerRenderer from './LoggerRenderer';
import VariableContext from '../../context/VariableContext';

const dummyData = [
    { id: 1, title: "logger1", fields: { title: 'text', des: 'textarea' } },
    { id: 2, title: "logger2", fields: { title: 'text', des: 'textarea' } },
    { id: 3, title: "logger3", fields: { title: 'text', des: 'textarea' } },
    { id: 4, title: "logger4", fields: { title: 'text', des: 'textarea' } },
    { id: 5, title: "logger5", fields: { title: 'text', des: 'textarea' } },
    { id: 6, title: "logger6", fields: { title: 'text', des: 'textarea' } },
]
export default function Loggers() {
    // const [loggers, setLoggers] = useState(dummyData);
    const { loggers } = useContext(VariableContext);



    return (
        <div>
            <Category />
            <LoggerRenderer {...{ loggers }} />
        </div>
    )
}
