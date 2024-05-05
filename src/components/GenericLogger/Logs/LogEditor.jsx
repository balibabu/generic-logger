import React, { useContext, useEffect, useState } from 'react'
import InputField from '../../shared/ui/InputField'
import { useNavigate, useParams } from 'react-router-dom';
import VariableContext from '../../context/VariableContext';
import LargeText from '../../shared/ui/LargeText';
import Checkbox from '../../shared/ui/Checkbox';
import DateField from '../../shared/ui/DateField';
import Time from '../../shared/ui/Time';
import DateTime from '../../shared/ui/DateTime';
import Option from '../../shared/ui/Option';
import MultipleSelect from '../../shared/ui/MultipleSelect/MultipleSelect';
import Radio from '../../shared/ui/Radio/Radio';
import KeyValuePair from '../../shared/ui/KeyValuePair';

export default function LogEditor({ views, models }) {
    const { loggerId, logId } = useParams();
    const isNew = logId === 'new';
    const logger = models.loggers.find((logger) => logger.id === loggerId);
    const [dumper, setDumper] = useState({});
    const navigate = useNavigate();
    const [button, setButton] = useState(isNew ? views.saveBtn : views.updateBtn);

    useEffect(() => {
        if (!isNew) {
            const oldVal = models.logs.find((log) => log.id === logId);
            setDumper(oldVal);
        }
    }, [])

    function saveHandler() {
        navigate(-1);
        const log = { ...dumper, loggerId };
        button.onclick(log);
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
                            ui = <DateField {...params} />
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
