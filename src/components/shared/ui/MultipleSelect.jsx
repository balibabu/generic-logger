import React, { useEffect } from 'react'
import Chips from './MultipleSelect/Chips'

export default function MultipleSelect({ field, dumper, setDumper }) {
    useEffect(() => {
        setDumper((prev) => ({ ...prev, [field.fieldName]: [] }));
    }, [])

    function selectHandler(item, checked) {
        if (checked) {
            setDumper((prev) => ({ ...prev, [field.fieldName]: [...prev[field.fieldName], item] }));
        } else {
            setDumper((prev) => ({ ...prev, [field.fieldName]: [...prev[field.fieldName].filter((op) => op !== item)] }));
        }
    }

    return (
        <div className='text-sky-900 text-2xl rounded-md overflow-hidden border-2 border-sky-900 bg-sky-100' >
            <div className='bg-sky-300 px-2 border-sky-900 p-1  text-sky-900 font-bold border-b-2 border-sky-900'>{field.fieldName}</div>
            <div className='m-2 flex flex-wrap'>
                {field.options && field.options.map((option, i) => <Chips key={i} {...{ option, selected: dumper[field.fieldName], selectHandler }} />)}
            </div>
        </div>
    )
}
