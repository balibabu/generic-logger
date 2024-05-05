import React, { useEffect, useState } from 'react'
import Form from './Form';
import Fields from './Fields';
import { useNavigate, useParams } from 'react-router-dom';
import OptionReq from './Option/OptionReq';

const dummyLogger = { title: '', fields: [] }
const dummyField = { fieldName: '', fieldType: 'Text' };
export default function LoggerEditor({ views, loggers }) {
    const { loggerId } = useParams();
    const isNew = loggerId === 'new';
    const [dropdownOps,] = useState('Text, Large Text, Checkbox, Options, Date, Time, Date Time, Key Value Pair, Multiple Select, Radio'.split(','));
    const [field, setField] = useState(dummyField);
    const [logger, setLogger] = useState(dummyLogger);
    const [button,] = useState(isNew ? views.leftPannel.header.saveBtn : views.leftPannel.header.updateBtn);
    const [updating, setUpdating] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isNew) {
            const logger = loggers.find((logger) => logger.id === loggerId);
            setLogger(logger);
        }
    }, [])


    const saveLogger = () => {
        if (checkDuplicateLogger(loggers, logger)) { return }
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
                <Form {...{ views: views.leftPannel.form, logger, setLogger, dropdownOps, updating, setUpdating, field, setField }} />
                <Fields {...{ views: views.leftPannel.fields, logger, setLogger, dropdownOps, updating, setUpdating }} />
            </div>


            {/* Right Pannel */}
            <div className={views.rightPannel.style}>
                <OptionReq {...{ logger, setLogger, field, setField }} />
            </div>
        </div>
    )
}


function checkDuplicateLogger(loggers, logger) {
    for (const _logger of loggers) {
        if (_logger.title === logger.title) {
            alert('tile already present');
            return true;
        }
    }
    return false;
}
