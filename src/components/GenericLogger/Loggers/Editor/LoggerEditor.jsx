import React, { useContext, useEffect, useState } from 'react'
import Form from './Form';
import Fields from './Fields';
import { useNavigate, useParams } from 'react-router-dom';

const dummyLogger = { title: '', fields: [] }
export default function LoggerEditor({ views, loggers }) {
    const [dropdownOps,] = useState('Text, Large Text, Checkbox, Options, Date, Time, Date Time, Key Value Pair, Multiple Select, Radio'.split(','));
    const { loggerId } = useParams();
    const [logger, setLogger] = useState(dummyLogger);
    const [button,] = useState(isNaN(loggerId) ? views.leftPannel.header.saveBtn : views.leftPannel.header.updateBtn);
    const [updating, setUpdating] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isNaN(loggerId)) {
            const logger = loggers.find((logger) => logger.id === parseInt(loggerId));
            setLogger(logger);
        }
    }, [])


    const saveLogger = () => {
        button.onclick(logger);
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
                <Form {...{ views: views.leftPannel.form, logger, setLogger, dropdownOps, updating, setUpdating }} />
                <Fields {...{ views: views.leftPannel.fields, logger, setLogger, dropdownOps,updating, setUpdating }} />
            </div>


            {/* Right Pannel */}
            <div className={views.rightPannel.style}></div>


        </div>
    )
}