import React, { useEffect, useState } from 'react'
import CheckCircle from '../../icons/CheckCircle'

export default function Chip({ option, selectHandler, selected }) {

    function clickHandler() {
        selectHandler(option);
    }

    const radioButtonClass = `w-5 h-5 rounded-full cursor-pointer mx-2 mt-2 border-2 border-sky-900 ${selected && selected === option ? 'bg-green-400' : 'bg-sky-100'}`;
    return (
        <div className='bg-sky-300 mx-1 rounded-full border-2 border-sky-900 flex pe-3 mb-2'>
            <div className={radioButtonClass} onClick={clickHandler}></div>
            <div className='pb-1 font-semibold text-sky-900'>{option}</div>
        </div>
    )
}
