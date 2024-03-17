import React, { useContext, useEffect, useState } from 'react'
import Form from './Form';
import Fields from './Fields';
import VariableContext from '../../context/VariableContext';
import { useNavigate, useParams } from 'react-router-dom';

const dummyLogger = { title: '', fields: [] }
export default function LoggerEditor({ views, loggers }) {
    const { loggerId } = useParams();
    const [logger, setLogger] = useState(dummyLogger);
    const [loggerName, setLoggerName] = useState('');
    const [fields, setFields] = useState([]);
    const { setLoggers } = useContext(VariableContext);
    const navigate = useNavigate();
    const [button, setButton] = useState(isNaN(loggerId) ? views.leftPannel.header.saveBtn : views.leftPannel.header.updateBtn);
    const newLogger = { title: loggerName, fields };

    useEffect(() => {
        if (!isNaN(loggerId)) {
            const logger = loggers.find((logger) => logger.id === parseInt(loggerId));
            // setLoggerName(logger.title);
            // newLogger['id'] = logger.id;
            // setFields(logger.fields);
            setLogger(logger);
        }
    }, [])


    const saveLogger = () => {
        button.onclick(logger);
        // setFields([]);
        // setLoggerName('');
        setLogger(dummyLogger);
        navigate(-1);
    }

    return (
        <div className={views.style}>

            {/* Left Pannel */}
            <div className={views.leftPannel.style}>
                <div className={views.leftPannel.header.style}>
                    <div className={views.leftPannel.header.title.style}>{views.leftPannel.header.title.value}</div>
                    <button className={views.leftPannel.header.saveBtn.style} onClick={saveLogger}>{views.leftPannel.header.saveBtn.icon}</button>
                </div>
                <Form {...{ setFields, loggerName, setLoggerName, views: views.leftPannel.form, logger, setLogger }} />
                <Fields {...{ fields, setFields, views: views.leftPannel.fields, logger, setLogger }} />
            </div>


            {/* Right Pannel */}
            <div className={views.rightPannel.style}></div>


        </div>
    )
}