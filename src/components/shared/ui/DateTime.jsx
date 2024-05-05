import React, { useEffect } from 'react'

export default function DateTime({ label, dumper, setDumper, field }) {
    useEffect(() => {
        if (field.autoAdd) {
            const currentDateTime = new Date().toISOString().slice(0, 16);
            setDumper((prev) => ({ ...prev, [field.fieldName]: currentDateTime }));
        }
    }, [])


    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: formatDateToString(e.target.value) }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-1 ps-1 text-sky-900 font-bold'>{label}</div>
            <input type="datetime-local" className='text-sky-800 bg-sky-100 flex-1' value={dumper[label] || ''} onChange={changeHandler} />
        </div>
    )
}

function formatDateToString(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}