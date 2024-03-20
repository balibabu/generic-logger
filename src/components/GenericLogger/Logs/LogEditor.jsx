import React, { useContext, useEffect, useState } from 'react'
import InputField from '../../shared/ui/InputField'
import { useNavigate, useParams } from 'react-router-dom';
import VariableContext from '../../context/VariableContext';
import LargeText from '../../shared/ui/LargeText';
import Checkbox from '../../shared/ui/Checkbox';
import Date from '../../shared/ui/Date';
import Time from '../../shared/ui/Time';
import DateTime from '../../shared/ui/DateTime';
import Option from '../../shared/ui/Option';
import MultipleSelect from '../../shared/ui/MultipleSelect';
import Radio from '../../shared/ui/Radio';
import KeyValuePair from '../../shared/ui/KeyValuePair';

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
        <div className='p-2'>
            <h1 className='text-xl'>{logger.title}</h1>
            <div className='pt-3 flex'>
                {/* Left Pannel */}
                <div className='flex-1'>
                    {logger.fields.map((field, index) => {
                        let ui;
                        const type = field.fieldType.trim().toLowerCase();
                        const params = { label: field.fieldName, dumper, setDumper, field };

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
                        } else if (type === 'options') {
                            ui = <Option {...params} />
                        } else if (type === 'multiple select') {
                            ui = <MultipleSelect {...params} />
                        } else if (type === 'radio') {
                            ui = <Radio {...params} />
                        } else if (type === 'key value pair') {
                            ui = <KeyValuePair {...params} />
                        }
                        return <div key={index} className='mb-1'>{ui}</div>
                    })}
                </div>

                {/* Right Pannel */}
                <div className='flex-1'></div>
            </div>

            <button className='bg-sky-500 hover:bg-sky-600 text-sky-100 border-2 border-sky-900 rounded-md text-2xl w-1/4 py-1' onClick={saveHandler}>save</button>
        </div>
    )
}
