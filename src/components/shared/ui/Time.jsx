import React, { useEffect } from 'react'

export default function Time({ label, dumper, setDumper, field }) {

    useEffect(() => {
        if (field.autoAdd) {
            const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
            setDumper((prev) => ({ ...prev, [field.fieldName]: currentTime }));
        }
    }, [])


    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: e.target.value }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 w-1/2 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-grow ps-1 text-sky-900 font-bold'>{label}</div>
            <input type="time" className='text-sky-800 bg-sky-100' value={dumper[label] || ''} onChange={changeHandler} />
        </div>
    )
}