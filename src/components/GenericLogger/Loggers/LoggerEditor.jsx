import React, { useContext, useState } from 'react'
import Form from './Form';
import Fields from './Fields';
import VariableContext from '../../context/VariableContext';
import { useNavigate } from 'react-router-dom';

export default function LoggerEditor() {
    const [loggerName, setLoggerName] = useState('');
    const [fields, setFields] = useState([]);
    const { setLoggers } = useContext(VariableContext);
    const navigate = useNavigate();


    const saveLogger = () => {
        const newLogger = { title: loggerName, fields };
        setLoggers((prev) => [...prev, newLogger]);
        setFields([]);
        setLoggerName('');
        navigate(-1);
    }

    return (
        <div className='pt-3 flex'>

            {/* Left Pannel */}
            <div className='flex-1'>
                <div className='flex justify-between mb-4'>
                    <div className='text-4xl text-sky-200'>Create New Logger </div>
                    <button className='bg-sky-500 text-4xl rounded-full px-2 hover:opacity-50' onClick={saveLogger}>Save</button>
                </div>
                <Form {...{ setFields, loggerName, setLoggerName }} />
                <Fields {...{ fields, setFields }} />
            </div>


            {/* Right Pannel */}
            <div className='flex-1'></div>


        </div>
    )
}