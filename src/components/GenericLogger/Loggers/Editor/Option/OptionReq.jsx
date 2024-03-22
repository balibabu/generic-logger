import React, { useState } from 'react'
import Options from './Options';

const optionsReqFields = 'options,multiple select,radio'.split(',');
export default function OptionReq({ logger, setLogger, field, setField }) {
    const [autoAdd, setAutoAdd] = useState(false);

    if (optionsReqFields.includes(field.fieldType.trim().toLowerCase())) {
        return (
            <Options {...{ logger, setLogger, field, setField }} />
        )
    }
    if (['date', 'time', 'date time'].includes(field.fieldType.trim().toLowerCase())) {
        function ChangeHandler() {
            setField((prev) => ({ ...prev, 'autoAdd': !autoAdd }))
            setAutoAdd(!autoAdd);
        }
        return (
            <div>
                <div className='flex border-2 border-sky-900 bg-sky-100 w-1/2 text-2xl rounded-md overflow-hidden'>
                    <div className='bg-sky-300 flex-grow ps-1  text-sky-900 font-bold'>Auto Add</div>
                    <input className='mx-2 bg-sky-100' type='checkbox' checked={autoAdd} onChange={ChangeHandler} />
                </div>
            </div>
        )
    }
    return (
        <div>OptionNotReq</div>
    )
}
