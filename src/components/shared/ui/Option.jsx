import React, { useEffect } from 'react'

export default function Option({ field, dumper, setDumper }) {
    useEffect(() => {
        setDumper((prev) => ({ ...prev, [field.fieldName]: field.options[0] }));
    }, [])


    function onChangeHandler(e) {
        setDumper((prev) => ({ ...prev, [field.fieldName]: e.target.value }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 w-1/2 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-1 ps-1  text-sky-900 font-bold border-e-2 border-sky-900'>{field.fieldName}</div>
            <select className='flex-1 flex-grow outline-none p-1 bg-sky-100' value={dumper[field.fieldName] || field.options[0]} onChange={onChangeHandler}>
                {field.options.map((option, index) => <option key={index} value={option}>{option}</option>)}
            </select>
        </div>
    )
}
