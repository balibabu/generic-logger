import React, { useEffect } from 'react'

export default function DateField({ label, dumper, setDumper, field }) {

    useEffect(() => {
        if (field.autoAdd) {
            const currentDate = new Date().toISOString().split('T')[0];
            setDumper((prev) => ({ ...prev, [field.fieldName]: currentDate }));
        }
    }, [])


    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: formatDateToString(e.target.value) }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 w-1/2 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-grow ps-1 text-sky-900 font-bold'>{label}</div>
            <input type="date" className='text-sky-800 bg-sky-100' value={dumper[label] || ''} onChange={changeHandler} />
        </div>
    )
}


function formatDateToString(value) {
    const date = new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}