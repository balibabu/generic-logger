import React, { useEffect, useState } from 'react'

export default function Chip({ option, selectHandler, selected }) {

    function clickHandler() {
        selectHandler(option);
    }

    const radioButtonClass = `w-5 h-5 rounded-full cursor-pointer mx-2 mt-2 border-2 border-sky-900 ${selected && selected === option ? 'bg-blue-700 ring-2 ring-sky-100 ring-inset' : 'bg-sky-100'}`;
    return (
        <div className='bg-sky-300 mx-1 rounded-full border-2 border-sky-900 flex pe-3 mb-2' onClick={clickHandler}>
            <div className={radioButtonClass}></div>
            <div className='pb-1 font-semibold text-sky-900'>{option}</div>
        </div>
    )
}
