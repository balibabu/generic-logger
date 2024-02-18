import React, {  useState } from 'react'

export default function Form({ setFields, loggerName,setLoggerName }) {
    const [fieldName, setFieldName] = useState('');
    const [fieldType, SetFieldType] = useState('Text');
    const [dropdownOps, setDropdownOps] = useState('Text, Large Text, Checkbox, Options, Date, Time, Date Time, Key Value Pair, Multiple Select, Radio'.split(','));


    function addField() {
        if (fieldName && fieldType) {
            setFields((prev) => [...prev, { fieldName, fieldType }])
            setFieldName('')
            SetFieldType('Text')
        }
    }

    return (
        <>
            <div className='flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900' >
                <label className='bg-sky-300 px-2 border-r-2 border-sky-900 w-fit p-1' htmlFor='loggerName'>Logger name</label>
                <input type="text" id='loggerName' className='flex-grow outline-none p-1 bg-sky-100'
                    value={loggerName}
                    onChange={(e) => setLoggerName(e.target.value)}
                />
            </div>

            <div className='mt-2 flex text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900'>
                <input type="text" className='flex-grow outline-none p-1 bg-sky-100 ' placeholder='Field Name'
                    value={fieldName}
                    onChange={(e) => setFieldName(e.target.value)}
                />
                <select className='flex-grow outline-none p-1 bg-sky-100 border-x-2 border-sky-900' value={fieldType} onChange={(e) => SetFieldType(e.target.value)}>
                    {dropdownOps.map((option, index) => <option key={index} value={option}>{option}</option>)}
                </select>
                <button className='bg-sky-500 px-3 hover:opacity-50' onClick={addField}>Add</button>
            </div>
        </>
    )
}
