import React, { useEffect } from 'react'

export default function Checkbox({ label, dumper, setDumper }) {

    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: !dumper[label] }));
    }

    return (
        <div className='flex border-2 border-sky-900 bg-sky-100 w-1/2 text-2xl rounded-md overflow-hidden'>
            <div className='bg-sky-300 flex-grow ps-1  text-sky-900 font-bold'>{label}</div>
            <input className='mx-2 bg-sky-100' type='checkbox' checked={dumper[label] || false} onChange={changeHandler} />
        </div>
    )
}
