import React, { useEffect } from 'react'

export default function InputField({ label, dumper, setDumper }) {

    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: e.target.value }));
    }

    return (
        <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900' >
            <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold' htmlFor={label}>{label}</div>
            <input type="text" className='outline-none p-1 w-full' value={dumper[label] || ''} onChange={changeHandler} />
        </div>
    )
}