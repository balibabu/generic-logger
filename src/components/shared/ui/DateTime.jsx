import React, { useEffect } from 'react'

export default function DateTime({ label, dumper, setDumper, field }) {
    useEffect(() => {
        if (field.autoAdd) {
            const currentDateTime = new Date().toISOString().slice(0, 16);
            setDumper((prev) => ({ ...prev, [field.fieldName]: currentDateTime }));
        }
    }, [])


    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: e.target.value }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-1 ps-1 text-sky-900 font-bold'>{label}</div>
            <input type="datetime-local" className='text-sky-800 bg-sky-100 flex-1' value={dumper[label] || ''} onChange={changeHandler} />
        </div>
    )
}