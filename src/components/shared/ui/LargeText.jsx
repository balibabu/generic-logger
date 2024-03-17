import React, { useEffect } from 'react'

export default function LargeText({ label, dumper, setDumper }) {

    function changeHandler(e) {
        setDumper((prev) => ({ ...prev, [label]: e.target.value }));
    }

    const result = <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900' >
        <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold'>{label}</div>
        <textarea className='outline-none p-1 w-full' onChange={changeHandler} {...{ value: dumper[label] }} />
    </div>;

    return result;
}