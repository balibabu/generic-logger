import React, { useContext, useEffect, useState } from 'react'
import InputField from '../../shared/ui/InputField'
import { useNavigate, useParams } from 'react-router-dom';
import VariableContext from '../../context/VariableContext';
import LargeText from '../../shared/ui/LargeText';
import Checkbox from '../../shared/ui/Checkbox';
import Date from '../../shared/ui/Date';
import Time from '../../shared/ui/Time';
import DateTime from '../../shared/ui/DateTime';

export default function LogEditor({ views, models }) {
    const { loggerId, logId } = useParams();
    const logger = models.loggers.find((logger) => logger.id === parseInt(loggerId));
    const [dumper, setDumper] = useState({});
    const navigate = useNavigate();
    const [button, setButton] = useState(isNaN(logId) ? views.saveBtn : views.updateBtn);

    useEffect(() => {
        if (!isNaN(logId)) {
            const oldVal = models.logs[parseInt(loggerId)].find((log) => log.id === parseInt(logId));
            setDumper(oldVal);
        }
    }, [])

    function saveHandler() {
        navigate(-1);
        button.onclick(loggerId, dumper);
        setDumper({});
    }

    return (
        <div>
            <h1 className='text-xl'>{logger.title}</h1>
            <div className='pt-3 flex'>
                {/* Left Pannel */}
                <div className='flex-1'>
                    {logger.fields.map((field, index) => {
                        let ui;
                        const type = field.fieldType.trim().toLowerCase();
                        const params = { label: field.fieldName, dumper, setDumper };

                        if (type === 'text') {
                            ui = <InputField {...params} />
                        } else if (type === 'large text') {
                            ui = <LargeText {...params} />
                        } else if (type === 'checkbox') {
                            ui = <Checkbox {...params} />
                        } else if (type === 'date') {
                            ui = <Date {...params} />
                        } else if (type === 'time') {
                            ui = <Time {...params} />
                        } else if (type === 'date time') {
                            ui = <DateTime {...params} />
                        }
                        return <div key={index} className='mb-1'>{ui}</div>
                    })}
                </div>

                {/* Right Pannel */}
                <div className='flex-1'></div>
            </div>

            <button className='bg-sky-500' onClick={saveHandler}>save</button>
        </div>
    )
}
