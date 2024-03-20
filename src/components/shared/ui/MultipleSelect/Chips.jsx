import React, { useEffect, useState } from 'react'
import CorrectTick from '../../icons/CorrectTick'

export default function Chips({ option, selectHandler, selected }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (selected && selected.includes(option)) {
            setChecked(true);
        }
    }, [selected])


    function checkHandler() {
        selectHandler(option, !checked);
        setChecked(!checked);
    }

    return (
        <>
            {checked ?
                <div className='bg-green-300 mx-1 rounded-full border-2 border-green-700 flex ps-3 mb-2'>
                    <div className='pb-1 font-semibold text-green-900'>{option}</div>
                    <div className='px-3 pt-2 cursor-pointer' onClick={checkHandler}><CorrectTick {...{ strokeWidth: 5, stroke: 'green' }} /></div>
                </div>
                :
                <div className='bg-sky-300 mx-1 rounded-full border-2 border-sky-900 flex ps-3 mb-2'>
                    <div className='pb-1 font-semibold'>{option}</div>
                    <div className='px-4 font-bold cursor-pointer' onClick={checkHandler}>+</div>
                </div>
            }
        </>
    )
}
